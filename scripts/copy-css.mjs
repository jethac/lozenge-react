// Ships the vendored stylesheet alongside the library build so consumers can
// `import "lozenge-react/lozenge.css"`.
import { cpSync } from "node:fs";
cpSync(new URL("../src/styles/lozenge.css", import.meta.url), new URL("../dist/lozenge.css", import.meta.url));
console.log("dist/lozenge.css written");
