import type { ComponentType } from "react";
import { LozengeThemeProvider } from "../src";
import { ThemePanel } from "./ThemePanel";

interface SectionModule {
  meta: { id: string; title: string };
  default: ComponentType;
}

// Every file in demo/sections/ is a self-registering gallery section; the
// contract test suite lints the same modules against specs/*.json.
const modules = import.meta.glob<SectionModule>("./sections/*.tsx", {
  eager: true,
});
const sections = Object.values(modules).sort((a, b) =>
  a.meta.title.localeCompare(b.meta.title),
);

export function App() {
  return (
    <LozengeThemeProvider>
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 24px 96px" }}>
        <h1>Lozenge React</h1>
        <p className="text-subtle">
          React bindings for the Lozenge design system — every section below is
          rendered by the React components and contract-checked against the
          upstream <code>specs/*.json</code>.
        </p>
        <nav aria-label="Components" style={{ margin: "16px 0 32px" }}>
          {sections.map((s) => (
            <a key={s.meta.id} href={`#${s.meta.id}`} style={{ marginInlineEnd: 12 }}>
              {s.meta.title}
            </a>
          ))}
        </nav>
        {sections.map((s) => {
          const Section = s.default;
          return (
            <section key={s.meta.id} id={s.meta.id} style={{ marginBlock: 48 }}>
              <h2>{s.meta.title}</h2>
              <Section />
            </section>
          );
        })}
      </main>
      <ThemePanel />
    </LozengeThemeProvider>
  );
}
