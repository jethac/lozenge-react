// Lozenge markup-contract validator, ported from jethac/lozenge
// scripts/lozenge-lint.mjs and refactored into an importable core so the
// React test suite can lint rendered component output in-process.
//
// For every element whose class list contains a spec's root required
// class(es), checks:
//   - root element tag is one of root.element
//   - exclusive variant axes: no two classes from the same exclusive axis
//   - required variant axes: at least one class from the axis is present
//   - required structure selectors exist within the subtree
//   - required aria attributes are present (rules with a "when" condition
//     are documentation-only and skipped)
//   - nesting.disallowed: simple-selector entries must match neither a
//     descendant nor an ancestor of the root; prose entries are skipped

import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";

/** Flatten spec files (each may carry subcomponents) into component blocks. */
export function loadSpecs(dir) {
  const entries = fs.readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
  const blocks = [];
  for (const f of entries) {
    const spec = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    blocks.push(spec);
    for (const sub of spec.subcomponents ?? []) blocks.push(sub);
  }
  return blocks.filter((b) => b.root?.requiredClasses?.length);
}

// ------------------------------------------------------- simple selectors

const COMPOUND_RE = /^([a-zA-Z][a-zA-Z0-9-]*)?((?:\.[a-zA-Z0-9_-]+)*)((?:\[[a-zA-Z-]+(?:="?[^\]"]*"?)?\])*)$/;

function parseCompound(src) {
  const m = COMPOUND_RE.exec(src);
  if (!m || (!m[1] && !m[2] && !m[3])) return null;
  const classes = m[2] ? m[2].split(".").filter(Boolean) : [];
  const attrs = [];
  if (m[3]) {
    for (const am of m[3].matchAll(/\[([a-zA-Z-]+)(?:="?([^\]"]*)"?)?\]/g)) {
      attrs.push({ name: am[1].toLowerCase(), value: am[2] });
    }
  }
  return { tag: m[1]?.toLowerCase() ?? null, classes, attrs };
}

function parseSelector(src) {
  const parts = [];
  const flat = src.trim().replace(/\s*>\s*/g, " > ").split(/\s+/);
  let combinator = null;
  for (const tok of flat) {
    if (tok === ">") { combinator = "child"; continue; }
    const compound = parseCompound(tok);
    if (!compound) return null;
    parts.push({ compound, combinator: parts.length === 0 ? null : (combinator ?? "descendant") });
    combinator = null;
  }
  return parts.length ? parts : null;
}

// ------------------------------------------------------------- DOM helpers

function isElement(node) {
  return node.tagName !== undefined && node.attrs !== undefined;
}

function getAttr(el, name) {
  const a = el.attrs.find((x) => x.name === name);
  return a ? a.value : undefined;
}

function classList(el) {
  const c = getAttr(el, "class");
  return c ? c.split(/\s+/).filter(Boolean) : [];
}

function matchCompound(el, c) {
  if (!isElement(el)) return false;
  if (c.tag && el.tagName !== c.tag) return false;
  if (c.classes.length) {
    const cls = classList(el);
    for (const k of c.classes) if (!cls.includes(k)) return false;
  }
  for (const a of c.attrs) {
    const v = getAttr(el, a.name);
    if (v === undefined) return false;
    if (a.value !== undefined && v !== a.value) return false;
  }
  return true;
}

function matchChain(el, parts, boundary) {
  if (!matchCompound(el, parts[parts.length - 1].compound)) return false;
  let node = el;
  for (let i = parts.length - 2; i >= 0; i--) {
    const need = parts[i].compound;
    const rel = parts[i + 1].combinator;
    if (rel === "child") {
      node = node.parentNode;
      if (!node || !isElement(node) || !matchCompound(node, need)) return false;
      if (boundary && node !== boundary && !isAncestorOrSelf(boundary, node)) return false;
    } else {
      let cur = node.parentNode;
      let found = null;
      while (cur && isElement(cur)) {
        if (matchCompound(cur, need)) { found = cur; break; }
        if (cur === boundary) break;
        cur = cur.parentNode;
      }
      if (!found) return false;
      if (boundary && found !== boundary && !isAncestorOrSelf(boundary, found)) return false;
      node = found;
    }
  }
  return true;
}

function isAncestorOrSelf(anc, node) {
  let cur = node;
  while (cur) {
    if (cur === anc) return true;
    cur = cur.parentNode;
  }
  return false;
}

function* walk(node) {
  if (isElement(node)) yield node;
  for (const child of node.childNodes ?? []) yield* walk(child);
}

function* descendants(el) {
  for (const child of el.childNodes ?? []) yield* walk(child);
}

function queryAll(root, parts, { includeSelf = false } = {}) {
  const out = [];
  if (includeSelf && matchChain(root, parts, null)) out.push(root);
  for (const el of descendants(root)) {
    if (matchChain(el, parts, root)) out.push(el);
  }
  return out;
}

function nestingSelector(entry) {
  const parts = parseSelector(entry);
  if (!parts) return null;
  for (const p of parts) {
    if (p.compound.tag && p.compound.classes.length === 0 && p.compound.attrs.length === 0) return null;
  }
  return parts;
}

// ---------------------------------------------------------------- linting

function lintElement(findings, file, el, spec) {
  const name = spec.component;
  const cls = classList(el);
  const root = spec.root;

  const report = (node, rule, message) => {
    const line = node?.sourceCodeLocation?.startLine ?? 0;
    findings.push({ file, line, component: name, rule, message });
  };

  if (Array.isArray(root.element) && root.element.length && !root.element.includes(el.tagName)) {
    report(el, "root-element",
      `<${el.tagName}> is not an allowed element for ${root.selector} (allowed: ${root.element.join(", ")})`);
  }

  for (const [axis, def] of Object.entries(spec.variants ?? {})) {
    const present = def.classes.filter((c) => cls.includes(c));
    if (def.exclusive && present.length > 1) {
      report(el, "variant-exclusive",
        `classes ${present.join(" + ")} are mutually exclusive on the "${axis}" axis`);
    }
    if (def.required && present.length === 0) {
      report(el, "variant-required",
        `missing required "${axis}" variant (one of: ${def.classes.join(", ")})`);
    }
  }

  for (const entry of spec.structure ?? []) {
    if (!entry.required) continue;
    const parts = parseSelector(entry.selector);
    if (!parts) continue;
    if (queryAll(el, parts).length === 0) {
      report(el, "structure-missing",
        `required descendant "${entry.selector}" not found`);
    }
  }

  for (const rule of spec.aria ?? []) {
    if (!rule.required || rule.when) continue;
    const parts = parseSelector(rule.on);
    if (!parts) continue;
    for (const target of queryAll(el, parts, { includeSelf: true })) {
      if (getAttr(target, rule.attr) === undefined) {
        report(target, "aria-missing",
          `element matching "${rule.on}" is missing required attribute ${rule.attr}`);
      }
    }
  }

  for (const entry of spec.nesting?.disallowed ?? []) {
    const parts = nestingSelector(entry);
    if (!parts) continue;
    const hit = queryAll(el, parts)[0];
    if (hit) {
      report(hit, "nesting-disallowed",
        `"${entry}" must not appear inside ${root.selector}`);
    }
    if (parts.length === 1) {
      let cur = el.parentNode;
      while (cur && isElement(cur)) {
        if (matchCompound(cur, parts[0].compound)) {
          report(el, "nesting-disallowed",
            `${root.selector} must not appear inside "${entry}"`);
          break;
        }
        cur = cur.parentNode;
      }
    }
  }
}

/**
 * Lint an HTML string against the given spec blocks.
 * Returns an array of findings: { file, line, component, rule, message }.
 */
export function lintHtml(html, specs, file = "<input>") {
  const findings = [];
  const doc = parse(html, { sourceCodeLocationInfo: true });
  for (const el of walk(doc)) {
    const cls = classList(el);
    if (cls.length === 0) continue;
    for (const spec of specs) {
      if (spec.root.requiredClasses.every((c) => cls.includes(c))) {
        lintElement(findings, file, el, spec);
      }
    }
  }
  return findings;
}
