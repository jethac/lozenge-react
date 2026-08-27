import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type RingSize = "sm" | "lg";
export type RingStatus = "success" | "danger";

export interface RingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Progress in the 0..1 range — drives the `--value` custom property and is
   * also expressed as `aria-valuenow` on the 0..100 scale (same fact, two
   * scales).
   */
  value: number;
  /** 24px (`sm`) / 48px (`lg`); omit for the 32px default. */
  size?: RingSize;
  /** Recolors the fill only — pair with visible text nearby, since color alone must not carry meaning. */
  status?: RingStatus;
  /**
   * Optional absolute-centered label (e.g. "60%") in the donut hole —
   * supplementary for sighted users; too cramped on `size="sm"`.
   */
  label?: string;
}

/**
 * Determinate circular progress (`<div class="ring">`): a conic-gradient
 * donut — no JS, no SVG. `role="progressbar"` and `aria-valuenow` are built
 * in; name it via `aria-label`/`aria-labelledby` when no visible text labels
 * it. For indeterminate progress use `.spinner`; for linear, `.progress`.
 */
export const Ring = forwardRef<HTMLDivElement, RingProps>(function Ring(
  { value, size, status, label, className, style, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={Math.round(value * 100)}
      style={{ "--value": value, ...style } as CSSProperties}
      className={cx(
        "ring",
        size && `ring-${size}`,
        status && `ring-${status}`,
        className,
      )}
      {...rest}
    >
      {label !== undefined && <span className="ring-label">{label}</span>}
      {children}
    </div>
  );
});
