import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  /** Accessible name for the `<nav>` landmark. */
  label?: string;
}

/**
 * Page navigation for long result sets (`<nav class="pagination">`): a flex
 * row of 32px `PageLink` buttons with previous/next arrows and an optional
 * `PageEllipsis` marking elided ranges. Use under tables and search results.
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ label = "Pagination", className, ...rest }, ref) {
    return (
      <nav
        ref={ref}
        aria-label={label}
        className={cx("pagination", className)}
        {...rest}
      />
    );
  },
);

export interface PageLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks the current page — also sets `aria-current="page"`. */
  active?: boolean;
  /** Unavailable link (e.g. prev on page 1) — also sets `aria-disabled`. */
  disabled?: boolean;
}

/**
 * A page button (`<a class="page-link">`). Arrow-only prev/next links need an
 * `aria-label` ("Previous page" / "Next page").
 */
export const PageLink = forwardRef<HTMLAnchorElement, PageLinkProps>(
  function PageLink({ active, disabled, className, ...rest }, ref) {
    return (
      <a
        ref={ref}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled ? "true" : undefined}
        className={cx(
          "page-link",
          active && "active",
          disabled && "disabled",
          className,
        )}
        {...rest}
      />
    );
  },
);

export interface PageEllipsisProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * Non-interactive `<span class="page-ellipsis">` standing in for an elided
 * page range — a plain span, so it is skipped in tab order. Never a PageLink.
 */
export const PageEllipsis = forwardRef<HTMLSpanElement, PageEllipsisProps>(
  function PageEllipsis({ className, children, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("page-ellipsis", className)} {...rest}>
        {children ?? "…"}
      </span>
    );
  },
);
