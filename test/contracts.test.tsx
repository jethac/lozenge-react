// Renders every demo section to static HTML and validates it against the
// component contracts vendored from jethac/lozenge (specs/*.json), using the
// ported lozenge-lint core. This is the same contract the upstream CSS
// framework enforces on its own demo pages in CI.
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement, type ComponentType } from "react";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadSpecs, lintHtml } from "../scripts/lib/lint-core.mjs";

const specsDir = join(dirname(fileURLToPath(import.meta.url)), "..", "specs");
const specs = loadSpecs(specsDir);

interface SectionModule {
  meta: { id: string; title: string };
  default: ComponentType;
}

const sections = import.meta.glob<SectionModule>("../demo/sections/*.tsx", {
  eager: true,
});

const rendered: Record<string, string> = {};
for (const [file, mod] of Object.entries(sections)) {
  rendered[file] = renderToStaticMarkup(createElement(mod.default));
}

describe("component contracts", () => {
  it("has demo sections to lint", () => {
    expect(Object.keys(rendered).length).toBeGreaterThan(0);
  });

  for (const [file, html] of Object.entries(rendered)) {
    it(`${file} passes lozenge-lint`, () => {
      const findings = lintHtml(html, specs, file);
      const msg = findings
        .map((f) => `${f.component} ${f.rule}: ${f.message}`)
        .join("\n");
      expect(findings, msg).toEqual([]);
    });
  }

  it("every top-level component contract is exercised by some section", () => {
    const tokens = new Set<string>();
    for (const html of Object.values(rendered)) {
      for (const m of html.matchAll(/class="([^"]*)"/g)) {
        for (const t of m[1].split(/\s+/)) if (t) tokens.add(t);
      }
    }
    const missing = specs
      .filter((s) => !s.root.requiredClasses.every((c) => tokens.has(c)))
      .map((s) => s.component);
    expect(missing).toEqual([]);
  });
});
