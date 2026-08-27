import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type GaugeFill = "neutral" | "success" | "warning" | "danger";

export interface GaugeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The quantity in the 0..1 range — drives the `--value` custom property and
   * is also expressed as `aria-valuenow` on the 0..100 scale. Ignored when
   * `unknown`. Out-of-range and malformed values render an empty fill, never
   * full.
   */
  value?: number;
  /**
   * Redundant hue on top of the bar length; omit for the accent fill. The bar
   * length and the printed number carry the meaning — hue is an accelerator.
   */
  fill?: GaugeFill;
  /**
   * Not observed: replaces the 4px band with a 1px rule, dashes the frame,
   * and renders `role="img"` with NO `aria-valuenow` (a meter must claim a
   * value). Give it an `aria-label` such as "Week quota: not observed".
   */
  unknown?: boolean;
  /** Threshold tick position (0..1) — renders a `.gauge-limit`. Omit to draw nothing. */
  limit?: number;
  /**
   * The reading as text for `.gauge-value` (e.g. "82%") — mandatory, the
   * number carries the meaning. Defaults to an em dash when `unknown`.
   */
  children?: React.ReactNode;
}

/**
 * A compact meter for one bounded quantity — quota consumed, disk used, rate
 * limit spent (`<span class="gauge">`): a framed box whose block-end edge is
 * a 4px bar graph, with the number printed above the bar so the same fact is
 * carried twice. Name every gauge (`aria-label`/`aria-labelledby`) — the role
 * does not infer a name from the value text. Put it INSIDE a `<td>`, never on
 * one. For progress toward completion use `.progress` or Ring.
 */
export const Gauge = forwardRef<HTMLSpanElement, GaugeProps>(function Gauge(
  { value, fill, unknown, limit, className, style, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      role={unknown ? "img" : "meter"}
      aria-valuenow={
        unknown || value === undefined ? undefined : Math.round(value * 100)
      }
      style={
        unknown || value === undefined
          ? style
          : ({ "--value": value, ...style } as CSSProperties)
      }
      className={cx(
        "gauge",
        fill && `gauge-${fill}`,
        unknown && "gauge-unknown",
        className,
      )}
      {...rest}
    >
      {unknown ? (
        <span className="gauge-value" aria-hidden="true">
          {children ?? "—"}
        </span>
      ) : (
        <span className="gauge-value">{children}</span>
      )}
      {!unknown && (
        <span className="gauge-track">
          <span className="gauge-fill" />
        </span>
      )}
      {!unknown && limit !== undefined && (
        <span
          className="gauge-limit"
          style={{ "--limit": limit } as CSSProperties}
        />
      )}
    </span>
  );
});
