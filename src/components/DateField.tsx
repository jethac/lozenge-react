import {
  Children,
  Fragment,
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface DateFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** Reduced height for dense surfaces. */
  compact?: boolean;
  /** Danger border; also sets `aria-invalid="true"`. */
  invalid?: boolean;
}

/**
 * Styled native date input (`<input type="date" class="form-control
 * date-field">`). The native calendar picker IS the behavior layer —
 * keyboard entry, locale formats, AT support. Associate a label via
 * `id`/`htmlFor`, or `aria-label` inside composites like `DateRange`; use
 * `min`/`max`/`required` rather than scripted validation where possible.
 */
export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  function DateField({ compact, invalid, className, type = "date", ...rest }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={cx(
          "form-control",
          "date-field",
          compact && "form-control-compact",
          invalid && "is-invalid",
          className,
        )}
        {...rest}
      />
    );
  },
);

export interface DateRangeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accessible name for the pair (e.g. "Sprint window"); sets `role="group"`
   * + `aria-label` so AT announces the two fields as one range.
   */
  label?: string;
}

/**
 * Row layout for a start/end pair (`.date-range`): two `DateField` children
 * flexing equally around a decorative en-dash separator (inserted
 * automatically, `aria-hidden`). Give each field its own `aria-label`
 * ("Start date" / "End date"). The layout imposes no logic — constrain the
 * pair with `min`/`max` in your app.
 */
export const DateRange = forwardRef<HTMLDivElement, DateRangeProps>(
  function DateRange({ label, className, children, ...rest }, ref) {
    const kids = Children.toArray(children);
    return (
      <div
        ref={ref}
        role={label ? "group" : undefined}
        aria-label={label}
        className={cx("date-range", className)}
        {...rest}
      >
        {kids.map((child, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <span className="date-range-separator" aria-hidden="true">
                –
              </span>
            )}
            {child}
          </Fragment>
        ))}
      </div>
    );
  },
);
