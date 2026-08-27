import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOZENGE_THEME_DEFAULTS,
  applyLozengeTheme,
  type LozengeTheme,
} from "./theme";

interface LozengeThemeContextValue {
  theme: LozengeTheme;
  /** Merge a partial update into the current theme. */
  setTheme: (patch: Partial<LozengeTheme>) => void;
  /** Return every axis to its resting position. */
  resetTheme: () => void;
}

const LozengeThemeContext = createContext<LozengeThemeContextValue | null>(null);

export interface LozengeThemeProviderProps {
  /** Initial axis values; merged over the defaults. */
  defaultTheme?: Partial<LozengeTheme>;
  /** Element the axes are written to. Defaults to `document.documentElement`. */
  root?: HTMLElement;
  children?: ReactNode;
}

/**
 * Holds the theme axes as React state and mirrors them onto the document root,
 * where the Lozenge stylesheet resolves them at runtime. Read and drive the
 * axes from anywhere with `useLozengeTheme()`.
 */
export function LozengeThemeProvider({
  defaultTheme,
  root,
  children,
}: LozengeThemeProviderProps) {
  const [theme, setThemeState] = useState<LozengeTheme>({
    ...LOZENGE_THEME_DEFAULTS,
    ...defaultTheme,
  });

  useEffect(() => {
    applyLozengeTheme(theme, root ?? document.documentElement);
  }, [theme, root]);

  const setTheme = useCallback(
    (patch: Partial<LozengeTheme>) =>
      setThemeState((prev) => ({ ...prev, ...patch })),
    [],
  );
  const resetTheme = useCallback(
    () => setThemeState({ ...LOZENGE_THEME_DEFAULTS }),
    [],
  );

  const value = useMemo(
    () => ({ theme, setTheme, resetTheme }),
    [theme, setTheme, resetTheme],
  );

  return (
    <LozengeThemeContext.Provider value={value}>
      {children}
    </LozengeThemeContext.Provider>
  );
}

export function useLozengeTheme(): LozengeThemeContextValue {
  const ctx = useContext(LozengeThemeContext);
  if (!ctx)
    throw new Error("useLozengeTheme must be used inside <LozengeThemeProvider>");
  return ctx;
}
