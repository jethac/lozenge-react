/**
 * The Lozenge runtime theme axes. Everything routes through one attribute and
 * four numeric custom properties on the document root — no rebuild, animatable.
 */
export interface LozengeTheme {
  /** Color scheme: "auto" defers to `prefers-color-scheme`. */
  scheme: "auto" | "light" | "dark";
  /** Contrast dial, −1 (reduced) … +1 (more). Maps to `--lz-contrast`. */
  contrast: number;
  /** Accent hue in OKLCH degrees. Jira blue is the resting position. Maps to `--lz-accent-hue`. */
  accentHue: number;
  /** Accent chroma multiplier, 0 … 1.4. Maps to `--lz-accent-chroma`. */
  accentChroma: number;
  /** Glass materials amount, 0 (solid) … 1 (frosted). Maps to `--lz-glass`. */
  glass: number;
}

export const LOZENGE_THEME_DEFAULTS: LozengeTheme = {
  scheme: "auto",
  contrast: 0,
  accentHue: 260.48,
  accentChroma: 1,
  glass: 1,
};

/**
 * Write a theme onto a root element (the document root by default). Usable
 * outside React; the provider calls this under the hood.
 */
export function applyLozengeTheme(
  theme: Partial<LozengeTheme>,
  root: HTMLElement = document.documentElement,
): void {
  const t = { ...LOZENGE_THEME_DEFAULTS, ...theme };
  if (t.scheme === "auto") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", t.scheme);
  root.style.setProperty("--lz-contrast", String(t.contrast));
  root.style.setProperty("--lz-accent-hue", String(t.accentHue));
  root.style.setProperty("--lz-accent-chroma", String(t.accentChroma));
  root.style.setProperty("--lz-glass", String(t.glass));
}
