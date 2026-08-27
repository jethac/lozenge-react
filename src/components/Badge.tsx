import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type BadgeTone = "primary" | "important" | "added" | "removed";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color tone; omit for the neutral counter. */
  tone?: BadgeTone;
}

/**
 * A small pill for numeric counters — unread counts, story points, +/− deltas
 * (`<span class="badge">`). For status words use Lozenge; for free-text labels
 * use Tag. Pair a bare number with visible text or an `aria-label` describing
 * what is being counted.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone, className, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx("badge", tone && `badge-${tone}`, className)}
      {...rest}
    />
  );
});
