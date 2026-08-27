import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Reduced-height track for dense surfaces (`.slider-compact`). */
  compact?: boolean;
  /**
   * Legacy 4px hairline look (`.slider-thin`). Its fill is driven by an
   * app-set `--value` custom property (0..1) — keep it in sync via `style`
   * or accept an unfilled track. The default chunky slider needs no wiring.
   */
  thin?: boolean;
}

/**
 * Styled native `<input type="range" class="slider">` with a live fill that
 * requires no wiring: dragging, keyboard steps, and programmatic value
 * changes all move it with zero JS. Name the control with a visible
 * `<label htmlFor>` or `aria-label`.
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  function Slider({ compact, thin, className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        type="range"
        className={cx(
          "slider",
          compact && "slider-compact",
          thin && "slider-thin",
          className,
        )}
        {...rest}
      />
    );
  },
);

export interface RangeSliderProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Dual-thumb range (`.range-slider`), zero JS: exactly two stacked `Slider`
 * children (min then max — document order determines the fill mask
 * direction). Each thumb keeps its own tab stop and ARIA slider semantics —
 * give each its own `aria-label` ("Minimum" / "Maximum"). The app enforces
 * min <= max on submit; the paint is agnostic.
 */
export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  function RangeSlider({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("range-slider", className)} {...rest} />
    );
  },
);
