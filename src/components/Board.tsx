import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface BoardProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Kanban board layout (`<div class="board">`): a horizontally scrolling flex
 * row of fixed-width columns. Use it as the main work view of a project;
 * children are `BoardColumn`s, whose cards wells hold `.issue-card` elements.
 */
export const Board = forwardRef<HTMLDivElement, BoardProps>(function Board(
  { className, ...rest },
  ref,
) {
  return <div ref={ref} className={cx("board", className)} {...rest} />;
});

export interface BoardColumnProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * One fixed-width, sunken-background column of a `Board`. Compose a
 * `BoardColumnHeader` and a `BoardColumnCards` inside it.
 */
export const BoardColumn = forwardRef<HTMLDivElement, BoardColumnProps>(
  function BoardColumn({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("board-column", className)} {...rest} />;
  },
);

export interface BoardColumnHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Issue count, rendered as a trailing `.badge` after the title. */
  count?: ReactNode;
}

/**
 * Column title row (flex; truncates), commonly ending with a badge count —
 * pass it via `count`.
 */
export const BoardColumnHeader = forwardRef<HTMLDivElement, BoardColumnHeaderProps>(
  function BoardColumnHeader({ count, className, children, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("board-column-header", className)} {...rest}>
        {children}
        {count !== undefined && count !== null && (
          <span className="badge">{count}</span>
        )}
      </div>
    );
  },
);

export interface BoardColumnCardsProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Padded well holding the stack of `.issue-card` elements; keeps a min-height
 * so empty columns remain drop targets.
 */
export const BoardColumnCards = forwardRef<HTMLDivElement, BoardColumnCardsProps>(
  function BoardColumnCards({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("board-column-cards", className)} {...rest} />
    );
  },
);
