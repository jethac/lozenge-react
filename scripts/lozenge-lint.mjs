#!/usr/bin/env node
// CLI wrapper over the ported contract validator: lints HTML files against
// the vendored specs/*.json. Usage:
//   node scripts/lozenge-lint.mjs <html-files...> [--specs specs] [--json]
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadSpecs, lintHtml } from "./lib/lint-core.mjs";

const argv = process.argv.slice(2);
const files = [];
let specsDir = join(dirname(fileURLToPath(import.meta.url)), "..", "specs");
let asJson = false;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--specs") specsDir = argv[++i];
  else if (a === "--json") asJson = true;
  else files.push(a);
}
if (!files.length) {
  console.error("Usage: node scripts/lozenge-lint.mjs <html-files...> [--specs dir] [--json]");
  process.exit(2);
}

const specs = loadSpecs(specsDir);
const findings = files.flatMap((f) => lintHtml(fs.readFileSync(f, "utf8"), specs, f));
findings.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

if (asJson) {
  console.log(JSON.stringify({ errors: findings.length, findings }, null, 2));
} else {
  for (const f of findings) {
    console.log(`${f.file}:${f.line} ${f.component} ${f.rule} ${f.message}`);
  }
  if (findings.length) console.error(`\n${findings.length} problem${findings.length === 1 ? "" : "s"} found.`);
  else console.log(`OK — ${files.length} file${files.length === 1 ? "" : "s"}, ${specs.length} component contracts, no problems.`);
}
process.exit(findings.length ? 1 : 0);
