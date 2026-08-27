// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { act } from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  LozengeThemeProvider,
  applyLozengeTheme,
  useLozengeTheme,
} from "../src";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

describe("theme axes", () => {
  it("applyLozengeTheme writes the attribute and custom properties", () => {
    const el = document.createElement("div");
    applyLozengeTheme({ scheme: "dark", contrast: 0.5, accentHue: 152 }, el);
    expect(el.getAttribute("data-theme")).toBe("dark");
    expect(el.style.getPropertyValue("--lz-contrast")).toBe("0.5");
    expect(el.style.getPropertyValue("--lz-accent-hue")).toBe("152");
    expect(el.style.getPropertyValue("--lz-accent-chroma")).toBe("1");
    expect(el.style.getPropertyValue("--lz-glass")).toBe("1");

    applyLozengeTheme({ scheme: "auto" }, el);
    expect(el.hasAttribute("data-theme")).toBe(false);
  });

  it("provider mirrors state onto the root element and setTheme patches it", async () => {
    const target = document.createElement("div");
    let api!: ReturnType<typeof useLozengeTheme>;
    function Probe() {
      api = useLozengeTheme();
      return null;
    }

    const host = document.createElement("div");
    const root = createRoot(host);
    await act(async () => {
      root.render(
        <LozengeThemeProvider root={target} defaultTheme={{ contrast: 0.2 }}>
          <Probe />
        </LozengeThemeProvider>,
      );
    });
    expect(target.style.getPropertyValue("--lz-contrast")).toBe("0.2");

    await act(async () => api.setTheme({ scheme: "dark", glass: 0 }));
    expect(target.getAttribute("data-theme")).toBe("dark");
    expect(target.style.getPropertyValue("--lz-glass")).toBe("0");
    // patch keeps unrelated axes
    expect(target.style.getPropertyValue("--lz-contrast")).toBe("0.2");

    await act(async () => api.resetTheme());
    expect(target.hasAttribute("data-theme")).toBe(false);
    expect(target.style.getPropertyValue("--lz-contrast")).toBe("0");
    await act(async () => root.unmount());
  });
});

describe("class composition", () => {
  it("merges variant, modifiers, and caller className", async () => {
    const host = document.createElement("div");
    const root = createRoot(host);
    await act(async () => {
      root.render(
        <Button appearance="primary" compact className="ms-2">
          Create
        </Button>,
      );
    });
    const btn = host.querySelector("button")!;
    expect(btn.className).toBe("btn btn-primary btn-compact ms-2");
    expect(btn.type).toBe("button");
    await act(async () => root.unmount());
  });
});
