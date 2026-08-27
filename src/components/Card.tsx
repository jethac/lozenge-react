import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Generic raised surface container with optional header/body/footer sections.
 * Use for grouping related content on a page. Cards are non-interactive
 * surfaces — if the whole card should be clickable, put a single `<a>` inside
 * rather than click handlers on the div. Never nest a card in a card.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("card", className)} {...rest} />;
  },
);

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
/** Optional heading strip with bottom separator. Use a real heading element inside. */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("card-header", className)} {...rest} />;
  },
);

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}
/** Padded content region; use for the main content. */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("card-body", className)} {...rest} />;
  },
);

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
/** Optional footer strip with top separator. */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("card-footer", className)} {...rest} />;
  },
);

export type IssueTypeName = "story" | "bug" | "task" | "epic";

export interface IssueTypeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Issue type — sets the mandatory fixed categorical color variant. */
  type: IssueTypeName;
  /**
   * Accessible name ("Bug", "Story"…). Provide it whenever the type is not
   * stated in nearby text; omit it when the square is purely decorative next
   * to visible text (the square then renders `aria-hidden`).
   */
  label?: string;
}

/**
 * 16px colored square standing in for an issue-type glyph icon
 * (story/bug/task/epic). Fixed categorical colors, deliberately not
 * accent-driven. Used in issue-card meta rows, table cells, and inline next
 * to titles.
 */
export const IssueType = forwardRef<HTMLSpanElement, IssueTypeProps>(
  function IssueType({ type, label, className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={cx("issue-type", `issue-type-${type}`, className)}
        {...rest}
      />
    );
  },
);

export interface IssueCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Issue-type square shown first in the meta row. */
  type?: IssueTypeName;
  /** Accessible name for the type square; defaults to the capitalized type. */
  typeLabel?: string;
  /** The issue identifier (e.g. "LOZ-42"); truncates. */
  issueKey?: string;
  /**
   * Extra meta row content after the type and key — badges/lozenges first,
   * the `.avatar` last (it right-aligns via `margin-left: auto`).
   */
  meta?: ReactNode;
}

/**
 * A single issue on a Kanban board: summary text (children) plus a meta row
 * of issue-type icon, key, badge/lozenge, and avatar. Lives inside
 * `.board-column-cards`; consecutive issue-cards space themselves 8px apart.
 * An independent root — never nested inside a `.card`.
 */
export const IssueCard = forwardRef<HTMLDivElement, IssueCardProps>(
  function IssueCard(
    { type, typeLabel, issueKey, meta, className, children, ...rest },
    ref,
  ) {
    const hasMeta = type !== undefined || issueKey !== undefined || meta !== undefined;
    return (
      <div ref={ref} className={cx("issue-card", className)} {...rest}>
        <div className="issue-card-summary">{children}</div>
        {hasMeta && (
          <div className="issue-card-meta">
            {type !== undefined && (
              <IssueType
                type={type}
                label={typeLabel ?? type.charAt(0).toUpperCase() + type.slice(1)}
              />
            )}
            {issueKey !== undefined && <span className="issue-key">{issueKey}</span>}
            {meta}
          </div>
        )}
      </div>
    );
  },
);
