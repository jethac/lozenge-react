import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of equal time periods after the 200px label column (`--lz-timeline-cols`, default 12). */
  cols?: number;
}

/**
 * Roadmap / Gantt-lite timeline: a CSS grid with a 200px label column plus
 * equal time-period columns. Purely presentational and inline-style-driven:
 * the generating app computes the columns; there is no runtime.
 */
export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  function Timeline({ cols, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx("timeline", className)}
        style={
          cols !== undefined
            ? ({ "--lz-timeline-cols": cols, ...style } as React.CSSProperties)
            : style
        }
        {...rest}
      />
    );
  },
);

export interface TimelineHeaderProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Subgrid header row: first child cell labels the left column, subsequent
 * cells are period labels — span multiple periods with inline
 * `style={{ gridColumn: "span N" }}`.
 */
export const TimelineHeader = forwardRef<HTMLDivElement, TimelineHeaderProps>(
  function TimelineHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("timeline-header", className)} {...rest} />
    );
  },
);

export interface TimelineRowProps extends HTMLAttributes<HTMLDivElement> {}

/** One subgrid row per item; hover highlights the whole row. */
export const TimelineRow = forwardRef<HTMLDivElement, TimelineRowProps>(
  function TimelineRow({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("timeline-row", className)} {...rest} />;
  },
);

export interface TimelineLabelProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Left-column cell: item name, truncates; lead with an `.issue-type` square
 * (`role="img"` + `aria-label`).
 */
export const TimelineLabel = forwardRef<HTMLDivElement, TimelineLabelProps>(
  function TimelineLabel({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("timeline-label", className)} {...rest} />
    );
  },
);

export type TimelineBarVariant = "done" | "risk";

export interface TimelineBarProps extends HTMLAttributes<HTMLDivElement> {
  /** 1-based first period the bar occupies (`--start`). */
  start: number;
  /** Number of periods the bar spans (`--span`); `start + span - 1` must not exceed the timeline's `cols`. */
  span: number;
  /** Accent by default; `done` = success, `risk` = warning. State the status in text too — color is invisible to assistive tech. */
  variant?: TimelineBarVariant;
}

/**
 * Pill bar placed on the period grid via `--start`/`--span` custom
 * properties. Convey the dates in text (bar text content, `title`, or an
 * adjacent table) — placement alone is invisible to assistive tech.
 */
export const TimelineBar = forwardRef<HTMLDivElement, TimelineBarProps>(
  function TimelineBar({ start, span, variant, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx(
          "timeline-bar",
          variant && `timeline-bar-${variant}`,
          className,
        )}
        style={{ "--start": start, "--span": span, ...style } as React.CSSProperties}
        {...rest}
      />
    );
  },
);
