import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cx } from "../lib/cx";

export interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 36px variant of the 48px default circle. */
  small?: boolean;
  /** Pill with icon + visible text instead of an icon-only circle. */
  extended?: boolean;
  /** Pins the FAB to the bottom-right corner above the page content. */
  fixed?: boolean;
}

/**
 * Floating action button — the screen's single primary action, drawn as a
 * raised accent circle (`<button class="fab">`). Use at most one per view.
 *
 * Icon-only FABs (i.e. not `extended` with visible label text) must carry an
 * `aria-label` naming the action — an icon glyph alone is not an accessible
 * name. Always a real `<button>`, so Space/Enter activation and disabled
 * semantics come free.
 */
export const Fab = forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { small, extended, fixed, className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx(
        "fab",
        small && "fab-small",
        extended && "fab-extended",
        fixed && "fab-fixed",
        className,
      )}
      {...rest}
    />
  );
});
