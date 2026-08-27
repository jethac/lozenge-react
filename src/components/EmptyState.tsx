import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface EmptyStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** The headline. Rendered as a real heading so it joins the page outline. */
  title: ReactNode;
  /**
   * Heading level for the title (h2–h6); pick the level that fits the page
   * outline. Defaults to h3.
   */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  /**
   * Optional illustration slot — a 96px sunken circle. Pass one large glyph
   * span marked `aria-hidden="true"` (or an `<img>` with `alt=""` when
   * purely decorative), or use `glyph` for the common case.
   */
  media?: ReactNode;
  /** Convenience: renders `media` as a single decorative glyph span. */
  glyph?: string;
  /** Centered row of next-step actions — lead with the primary next step. */
  actions?: ReactNode;
}

/**
 * Centered explanation for a region with nothing in it yet (empty backlog,
 * no search results, no notifications): optional illustration circle, a
 * title, subtle description text (children), and a row of next-step actions.
 * Max 460px wide, centered in its container.
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState(
    { title, headingLevel = 3, media, glyph, actions, className, children, ...rest },
    ref,
  ) {
    const Heading = `h${headingLevel}` as const;
    const mediaContent =
      media ?? (glyph !== undefined ? <span aria-hidden="true">{glyph}</span> : undefined);
    return (
      <div ref={ref} className={cx("empty-state", className)} {...rest}>
        {mediaContent !== undefined && (
          <div className="empty-state-media">{mediaContent}</div>
        )}
        <Heading className="empty-state-title">{title}</Heading>
        {children !== undefined && children !== null && (
          <p className="empty-state-description">{children}</p>
        )}
        {actions !== undefined && <div className="empty-state-actions">{actions}</div>}
      </div>
    );
  },
);
