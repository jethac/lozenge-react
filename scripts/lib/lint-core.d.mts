export interface LintSpec {
  component: string;
  root: { selector: string; element?: string[]; requiredClasses: string[] };
  variants?: Record<
    string,
    { classes: string[]; required?: boolean; exclusive?: boolean }
  >;
  structure?: Array<{ selector: string; required?: boolean }>;
  aria?: Array<{ on: string; attr: string; required?: boolean; when?: string }>;
  nesting?: { allowedIn?: string[]; disallowed?: string[] };
  subcomponents?: LintSpec[];
}

export interface LintFinding {
  file: string;
  line: number;
  component: string;
  rule: string;
  message: string;
}

export function loadSpecs(dir: string): LintSpec[];
export function lintHtml(
  html: string,
  specs: LintSpec[],
  file?: string,
): LintFinding[];
