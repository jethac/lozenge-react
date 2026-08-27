import {
  createElement,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";
import { Lozenge, type LozengeStatus } from "./Lozenge";

export interface BacklogProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Sprint planning backlog (`<div class="backlog">`): a flat list of
 * separator-divided `BacklogItem` rows. Pair with a `SprintHeader` strip
 * above it.
 */
export const Backlog = forwardRef<HTMLDivElement, BacklogProps>(function Backlog(
  { className, ...rest },
  ref,
) {
  return <div ref={ref} className={cx("backlog", className)} {...rest} />;
});

export interface SprintHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Sprint title, rendered as a real heading (`.sprint-name`, h500-style). */
  name: ReactNode;
  /** Heading level for the sprint name, to fit the page outline. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Date range next to the name (`.sprint-dates`). */
  dates?: ReactNode;
  /**
   * Right-aligned cluster (`.sprint-actions`): total story-point badge, then
   * compact Start/Complete sprint buttons.
   */
  actions?: ReactNode;
  /** Root element tag. */
  as?: "div" | "header";
}

/**
 * Sprint title strip above a backlog or board: sprint name, date range, and a
 * right-aligned actions cluster.
 */
export const SprintHeader = forwardRef<HTMLElement, SprintHeaderProps>(
  function SprintHeader(
    { name, headingLevel = 3, dates, actions, as = "div", className, children, ...rest },
    ref,
  ) {
    return createElement(
      as,
      { ref, className: cx("sprint-header", className), ...rest },
      createElement(`h${headingLevel}`, { className: "sprint-name" }, name),
      dates !== undefined && dates !== null && (
        <span className="sprint-dates">{dates}</span>
      ),
      children,
      actions !== undefined && actions !== null && (
        <div className="sprint-actions">{actions}</div>
      ),
    );
  },
);

export type BacklogIssueType = "story" | "bug" | "task" | "epic";

export interface BacklogItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Issue type — sets the fixed-color type square variant. */
  type?: BacklogIssueType;
  /** Accessible name for the type square; defaults to the type token. */
  typeLabel?: string;
  /** The issue identifier, e.g. "LOZ-31" (`key` is reserved by React). */
  issueKey: ReactNode;
  /** Workflow status — renders a `.lozenge.lozenge-{status}` pill when set. */
  status?: LozengeStatus;
  /** Nicer status pill text (e.g. "In progress"); falls back to the raw status token. */
  statusLabel?: ReactNode;
  /** Story-point estimate — renders a `.badge` labelled "N story points" when set. */
  points?: number | string;
  /** Assignee initials — renders a trailing `.avatar.avatar-sm` when set. */
  assignee?: ReactNode;
  /** Full assignee name for assistive tech (initials alone don't identify). */
  assigneeLabel?: string;
}

/**
 * One backlog row: issue-type square, key, flexible truncating summary
 * (children), then optional status lozenge, story-point badge, and assignee
 * avatar — each rendered only when its prop is present, matching the
 * `<lz-backlog-item>` authoring template.
 */
export const BacklogItem = forwardRef<HTMLDivElement, BacklogItemProps>(
  function BacklogItem(
    {
      type = "story",
      typeLabel,
      issueKey,
      status,
      statusLabel,
      points,
      assignee,
      assigneeLabel,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div ref={ref} className={cx("backlog-item", className)} {...rest}>
        <span
          className={`issue-type issue-type-${type}`}
          role="img"
          aria-label={typeLabel ?? type}
        />
        <span className="issue-key">{issueKey}</span>
        <span className="backlog-summary">{children}</span>
        {status !== undefined && (
          <Lozenge status={status}>{statusLabel ?? status}</Lozenge>
        )}
        {points !== undefined && (
          <span className="badge" aria-label={`${points} story points`}>
            {points}
          </span>
        )}
        {assignee !== undefined && assignee !== null && (
          <span className="avatar avatar-sm" aria-label={assigneeLabel}>
            {assignee}
          </span>
        )}
      </div>
    );
  },
);
