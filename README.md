# lozenge-react

React bindings for [Lozenge](https://github.com/jethac/lozenge) — a
Jira-flavoured design system with **runtime theme axes**: a continuous
contrast dial, parametric accent, and glass materials. Not affiliated with
Atlassian.

The CSS *is* the design system: this package vendors the upstream
`lozenge.css` unchanged and layers typed React components over it that render
the canonical Lozenge markup. Every component is contract-checked in CI
against the upstream machine-readable specs (`specs/*.json`) using a port of
`lozenge-lint`.

## Install

```bash
npm install github:jethac/lozenge-react react react-dom
```

```tsx
import "lozenge-react/lozenge.css";
import { LozengeThemeProvider, Button, Lozenge } from "lozenge-react";

export function App() {
  return (
    <LozengeThemeProvider>
      <Button appearance="primary">Create</Button>
      <Lozenge status="inprogress">In progress</Lozenge>
    </LozengeThemeProvider>
  );
}
```

## Theme axes

Everything routes through one attribute and four numeric custom properties on
the document root — no rebuild, animatable, drivable from a slider or your own
logic:

```tsx
const { theme, setTheme, resetTheme } = useLozengeTheme();

setTheme({ scheme: "dark" });      // data-theme
setTheme({ contrast: 0.5 });       // --lz-contrast   −1 … +1
setTheme({ accentHue: 152 });      // --lz-accent-hue  OKLCH degrees
setTheme({ accentChroma: 1.2 });   // --lz-accent-chroma
setTheme({ glass: 0 });            // --lz-glass       solid materials
```

Outside React (or before hydration), `applyLozengeTheme({ ... })` writes the
same axes directly.

- **Continuous contrast dial** — `contrast` is a numeric axis resolved through
  OKLCH relative color at runtime; the upstream CI verifies every declared
  text/surface pair against WCAG 2.2 ratios at every dial position.
- **Parametric accent** — `accentHue`/`accentChroma` rotate the entire accent
  system live; Jira blue is just the dial's resting position.
- **Glass materials** — overlay surfaces are frosted glass whose alpha is a
  function of the contrast dial, gated behind `@supports`,
  `prefers-reduced-transparency`, and forced-colors.

## The platform is (still) the behavior layer

Upstream Lozenge ships zero runtime JavaScript — behavior comes from the
platform, and the React components keep it that way:

- `Modal`, `Drawer`, `Sheet` render native `<dialog>`; the `open` prop drives
  `showModal()`/`close()`, or omit it and use declarative invokers
  (`commandfor`/`command`).
- `Dropdown` and menus use the `popover` attribute + CSS anchor positioning.
- `Accordion` renders `<details name>`/`<summary>`.
- `Tabs` and `Segmented` are radio inputs + `:has()`.

React adds typing, composition, and controlled-state conveniences — it does
not replace native semantics.

## Contract testing

`specs/*.json` (vendored from upstream) describe each component's markup
contract: root element, required/exclusive variant classes, required
structure, ARIA. `npm test` renders every demo section with
`react-dom/server` and lints the output with the ported validator
(`scripts/lib/lint-core.mjs`); a coverage test asserts every contract block is
exercised. The same CLI as upstream is available for arbitrary HTML:

```bash
node scripts/lozenge-lint.mjs page.html
```

## Development

```bash
npm run dev        # component gallery with the theme-axis control panel
npm test           # contract lint of every demo section
npm run build      # library build → dist/
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the porting conventions and how to
refresh the vendored CSS/specs from upstream.

## License

MIT
