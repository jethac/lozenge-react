import { useState } from "react";
import { Button, useLozengeTheme } from "../src";

/**
 * Floating theme-axis control panel — the React port of the upstream
 * demo/theme-panel.js. Everything routes through the LozengeThemeProvider.
 */
export function ThemePanel() {
  const { theme, setTheme, resetTheme } = useLozengeTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="card shadow-overlay"
      style={{ position: "fixed", bottom: 16, right: 16, zIndex: 900, width: 260 }}
    >
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Theme axes</span>
        <Button
          appearance="subtle"
          compact
          aria-label={collapsed ? "Expand" : "Collapse"}
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? "+" : "–"}
        </Button>
      </div>
      {!collapsed && (
        <div className="card-body">
          <div className="form-group">
            <label className="form-label" htmlFor="lzp-scheme">
              Scheme
            </label>
            <select
              className="form-select form-control-compact"
              id="lzp-scheme"
              value={theme.scheme}
              onChange={(e) =>
                setTheme({ scheme: e.target.value as typeof theme.scheme })
              }
            >
              <option value="auto">Auto (system)</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lzp-contrast">
              Contrast{" "}
              <span className="text-subtlest">{theme.contrast.toFixed(2)}</span>
            </label>
            <input
              type="range"
              id="lzp-contrast"
              min={-1}
              max={1}
              step={0.05}
              style={{ width: "100%" }}
              value={theme.contrast}
              onChange={(e) => setTheme({ contrast: Number(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lzp-hue">
              Accent hue{" "}
              <span className="text-subtlest">{Math.round(theme.accentHue)}°</span>
            </label>
            <input
              type="range"
              id="lzp-hue"
              min={0}
              max={360}
              step={1}
              style={{ width: "100%" }}
              value={theme.accentHue}
              onChange={(e) => setTheme({ accentHue: Number(e.target.value) })}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lzp-chroma">
              Accent chroma{" "}
              <span className="text-subtlest">
                ×{theme.accentChroma.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              id="lzp-chroma"
              min={0}
              max={1.4}
              step={0.05}
              style={{ width: "100%" }}
              value={theme.accentChroma}
              onChange={(e) => setTheme({ accentChroma: Number(e.target.value) })}
            />
          </div>
          <div className="form-group d-flex align-items-center gap-2">
            <label className="toggle">
              <input
                type="checkbox"
                id="lzp-glass"
                checked={theme.glass > 0}
                onChange={(e) => setTheme({ glass: e.target.checked ? 1 : 0 })}
              />
              <span className="toggle-slider"></span>
            </label>
            <label htmlFor="lzp-glass">Glass materials</label>
          </div>
          <div className="form-group d-flex justify-content-end">
            <Button compact onClick={resetTheme}>
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
