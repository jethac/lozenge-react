import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type LiHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export type ListElement = "ul" | "ol" | "div" | "nav";

export interface ListProps extends HTMLAttributes<HTMLElement> {
  /** Root element; keep a real `ul`/`ol` (with `li` rows) so item count and position are announced. */
  as?: ListElement;
  /** Separator border between rows. */
  divided?: boolean;
  /** Dense rows (32px one-line / 48px two-line min-heights). */
  compact?: boolean;
}

/**
 * List of tiles (Material ListTile equivalent): rows of optional leading
 * icon/avatar, a title with optional 12px subtitle, and optional trailing meta
 * (lozenge, count, chevron). Two-line height is automatic via
 * `:has(.list-item-subtitle)` — no extra class needed.
 */
export const List = forwardRef<HTMLElement, ListProps>(function List(
  { as = "ul", divided, compact, className, ...rest },
  ref,
) {
  const Tag = as as "ul";
  return (
    <Tag
      ref={ref as React.Ref<HTMLUListElement>}
      className={cx(
        "list",
        divided && "list-divided",
        compact && "list-compact",
        className,
      )}
      {...rest}
    />
  );
});

interface ListItemStateProps {
  /**
   * Marks the chosen row (selected-bg/selected-text). Color-only — pair it
   * with `aria-current` (navigation) or `aria-selected` (selection widgets).
   */
  selected?: boolean;
}

export interface ListItemProps
  extends ListItemStateProps,
    LiHTMLAttributes<HTMLLIElement> {}

/** Static row tile: `<li class="list-item">`. For interactive rows use ListItemLink / ListItemButton inside a plain `<li>`. */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem({ selected, className, ...rest }, ref) {
    return (
      <li
        ref={ref}
        className={cx("list-item", selected && "selected", className)}
        {...rest}
      />
    );
  },
);

export interface ListItemLinkProps
  extends ListItemStateProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

/** Interactive navigation row: `<a class="list-item">` — place it inside a plain `<li>`. */
export const ListItemLink = forwardRef<HTMLAnchorElement, ListItemLinkProps>(
  function ListItemLink({ selected, className, ...rest }, ref) {
    return (
      <a
        ref={ref}
        className={cx("list-item", selected && "selected", className)}
        {...rest}
      />
    );
  },
);

export interface ListItemButtonProps
  extends ListItemStateProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

/** Interactive action row: `<button class="list-item">` — place it inside a plain `<li>`. */
export const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>(
  function ListItemButton({ selected, className, type = "button", ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cx("list-item", selected && "selected", className)}
        {...rest}
      />
    );
  },
);

export interface ListItemLeadingProps extends HTMLAttributes<HTMLSpanElement> {}

/** Leading slot (icon, avatar, checkbox), flex-shrink: 0. */
export const ListItemLeading = forwardRef<HTMLSpanElement, ListItemLeadingProps>(
  function ListItemLeading({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("list-item-leading", className)} {...rest} />
    );
  },
);

export interface ListItemContentProps extends HTMLAttributes<HTMLSpanElement> {}

/** Flexible middle column stacking a title over an optional subtitle; both truncate. */
export const ListItemContent = forwardRef<HTMLSpanElement, ListItemContentProps>(
  function ListItemContent({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("list-item-content", className)} {...rest} />
    );
  },
);

export interface ListItemTitleProps extends HTMLAttributes<HTMLSpanElement> {}

/** First line of the row. */
export const ListItemTitle = forwardRef<HTMLSpanElement, ListItemTitleProps>(
  function ListItemTitle({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("list-item-title", className)} {...rest} />
    );
  },
);

export interface ListItemSubtitleProps extends HTMLAttributes<HTMLSpanElement> {}

/** Second line, 12px text-subtle; its presence bumps the row to the two-line height. */
export const ListItemSubtitle = forwardRef<HTMLSpanElement, ListItemSubtitleProps>(
  function ListItemSubtitle({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("list-item-subtitle", className)} {...rest} />
    );
  },
);

export interface ListItemTrailingProps extends HTMLAttributes<HTMLSpanElement> {}

/** Trailing slot for meta text, lozenges, or a chevron; text-subtle, flex-shrink: 0. */
export const ListItemTrailing = forwardRef<HTMLSpanElement, ListItemTrailingProps>(
  function ListItemTrailing({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("list-item-trailing", className)} {...rest} />
    );
  },
);
