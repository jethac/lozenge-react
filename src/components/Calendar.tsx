import {
  createElement,
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

const DEFAULT_WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

export interface CalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Month name + year, rendered as a real heading (`.calendar-title`). */
  title: ReactNode;
  /** Heading level for the title, to fit the page outline. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** When given, renders a compact icon button for paging to the previous month. */
  onPrevMonth?: MouseEventHandler<HTMLButtonElement>;
  /** When given, renders a compact icon button for paging to the next month. */
  onNextMonth?: MouseEventHandler<HTMLButtonElement>;
  /** Accessible name for the previous-month button. */
  prevMonthLabel?: string;
  /** Accessible name for the next-month button. */
  nextMonthLabel?: string;
  /** Seven weekday initials, in the locale's week order. */
  weekdays?: readonly ReactNode[];
}

/**
 * Month-grid calendar (Material DatePicker-style) that is honestly
 * presentational: it renders whatever `CalendarDay` cells the app gives it —
 * date math, selection state, month navigation, and range logic are app
 * concerns. The zero-JS behavior path for actually picking a date remains the
 * native `<input type="date">`; use `Calendar` when you control the state and
 * want the picker look. Children are the day cells of `.calendar-grid`,
 * covering full weeks (pad with `outside` days from adjacent months).
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  function Calendar(
    {
      title,
      headingLevel = 3,
      onPrevMonth,
      onNextMonth,
      prevMonthLabel = "Previous month",
      nextMonthLabel = "Next month",
      weekdays = DEFAULT_WEEKDAYS,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div ref={ref} className={cx("calendar", className)} {...rest}>
        <div className="calendar-header">
          {createElement(
            `h${headingLevel}`,
            { className: "calendar-title" },
            title,
          )}
          {onPrevMonth && (
            <button
              type="button"
              className="btn btn-icon btn-compact"
              aria-label={prevMonthLabel}
              onClick={onPrevMonth}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}
          {onNextMonth && (
            <button
              type="button"
              className="btn btn-icon btn-compact"
              aria-label={nextMonthLabel}
              onClick={onNextMonth}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          )}
        </div>
        <div className="calendar-grid">
          {weekdays.map((day, i) => (
            <span key={i} className="calendar-weekday">
              {day}
            </span>
          ))}
          {children}
        </div>
      </div>
    );
  },
);

export interface CalendarDayProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accent ring marking today; also sets the required `aria-current="date"`. */
  today?: boolean;
  /** Accent-filled selected day; exposed to assistive tech via `aria-pressed`. */
  selected?: boolean;
  /** Leading/trailing day belonging to an adjacent month. */
  outside?: boolean;
  /** Interior day of a range — fills the whole cell so the band reads as continuous. */
  inRange?: boolean;
  /** First day of a range (pill radius on the outer side only). */
  rangeStart?: boolean;
  /** Last day of a range (pill radius on the outer side only). */
  rangeEnd?: boolean;
}

/**
 * One day cell of the `.calendar-grid`: a real 32×32 `<button>` so it is
 * focusable and clickable, but with no built-in behavior — an interactive
 * picker wires selection, month paging, and roving arrow-key focus itself.
 * Give each button a full accessible date, e.g. `aria-label="12 August 2026"`,
 * since the visible text is just the day number.
 */
export const CalendarDay = forwardRef<HTMLButtonElement, CalendarDayProps>(
  function CalendarDay(
    {
      today,
      selected,
      outside,
      inRange,
      rangeStart,
      rangeEnd,
      className,
      type = "button",
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        aria-current={today ? "date" : undefined}
        aria-pressed={selected || undefined}
        className={cx(
          "calendar-day",
          today && "today",
          selected && "selected",
          outside && "outside",
          inRange && "in-range",
          rangeStart && "range-start",
          rangeEnd && "range-end",
          className,
        )}
        {...rest}
      />
    );
  },
);
