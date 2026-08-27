# Contributing / porting conventions

`lozenge-react` is a 1:1 React binding for the [Lozenge](https://github.com/jethac/lozenge)
design system. The CSS is vendored, unmodified, from the upstream build
(`src/styles/lozenge.css`); this repo only produces the canonical Lozenge
markup from typed React components.

## Ground rules

1. **The markup contract is law.** Each component must render exactly the
   markup its upstream contract describes (`specs/<name>.json`: root element,
   required/exclusive variant classes, required structure, ARIA). The contract
   test suite (`npm test`) renders every demo section and runs the ported
   `lozenge-lint` over the output.
2. **The platform is the behavior layer.** Keep the upstream zero-JS
   platform behaviors instead of reimplementing them in React:
   - Modals/drawers/sheets are native `<dialog>` (invoked via `showModal()`
     from an `open` prop, or declaratively via `commandfor`/`command`).
   - Dropdowns/menus use the `popover` attribute (+ anchor positioning CSS).
   - Accordions are `<details name="…">`/`<summary>`.
   - Tabs are radio inputs + `:has()`; segmented controls likewise.
   React adds typing, composition, and controlled-state conveniences on top —
   it must not replace the native semantics.
3. **Component shape.**
   - One file per upstream spec in `src/components/<PascalCase>.tsx`; export
     the root component plus named subcomponents (`Card`, `CardHeader`, …).
   - Props: variants become typed props (`appearance="primary"`), boolean
     modifiers become boolean props (`compact`, `bold`), never raw class
     strings. Merge a `className` prop last via `cx()` and spread `...rest`
     onto the root element. Use `forwardRef`.
   - Required ARIA from the spec is either hard-coded (when structural) or a
     required/encouraged prop (when content-dependent, e.g. `aria-label` on
     icon buttons).
   - JSDoc on the component summarising the spec `intent`, and on any prop
     whose meaning isn't obvious.
4. **Demo section per component** in `demo/sections/<name>.tsx`:
   ```tsx
   export const meta = { id: "<name>", title: "<Title>" };
   export default function <Title>Section() { … }
   ```
   Show the variants from the spec `examples` and upstream `docs/<name>.html`.
   Sections double as the contract-test fixtures, so they must render every
   variant worth guarding.
5. **No new CSS.** If markup needs a class that doesn't exist in
   `src/styles/lozenge.css`, the markup is wrong — check the upstream docs.
   Inline `style` in demo sections is fine for layout-only scaffolding.

## Refreshing the vendored artifacts

From a checkout of `jethac/lozenge` (`npm install && npm run build`):

```
cp dist/lozenge.css   ../lozenge-react/src/styles/lozenge.css
cp specs/*.json       ../lozenge-react/specs/
```

## Commands

- `npm run dev` — component gallery with the theme-axis panel
- `npm test` — contract lint of every demo section + behavior tests
- `npm run build` — library build (`dist/`)
