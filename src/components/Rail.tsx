import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface RailProps extends HTMLAttributes<HTMLElement> {}

/**
 * Navigation rail (`<nav class="rail">`): a compact 72px vertical strip of
 * top-level destinations for tablet/desktop, each item an icon over an 11px
 * label with the same pill indicator as the bottom nav. It is the compact form
 * of the sidebar — swap between them at a breakpoint rather than showing both.
 * When the page has more than one `<nav>` landmark, pass `aria-label`.
 */
export const Rail = forwardRef<HTMLElement, RailProps>(function Rail(
  { className, ...rest },
  ref,
) {
  return <nav ref={ref} className={cx("rail", className)} {...rest} />;
});

export interface RailItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** 20px icon slot content (inline SVG, `aria-hidden` — decorative). */
  icon: ReactNode;
  /** 11px label under the icon. If omitted, give the item an `aria-label`. */
  label?: ReactNode;
  /**
   * Marks the current destination (exactly one per rail): adds `.active` and
   * `aria-current="page"` (required by the contract).
   */
  active?: boolean;
}

/** One 56px-tall destination (`<a class="rail-item">`), stacked in the rail. */
export const RailItem = forwardRef<HTMLAnchorElement, RailItemProps>(
  function RailItem(
    { icon, label, active, className, "aria-current": ariaCurrent, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        aria-current={ariaCurrent ?? (active ? "page" : undefined)}
        className={cx("rail-item", active && "active", className)}
        {...rest}
      >
        <span className="rail-icon">{icon}</span>
        {label != null && <span className="rail-label">{label}</span>}
      </a>
    );
  },
);

export interface RailFabProps extends HTMLAttributes<HTMLDivElement> {}

/** Optional slot (`.rail-fab`) at the top of the rail for the primary action. */
export const RailFab = forwardRef<HTMLDivElement, RailFabProps>(
  function RailFab({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("rail-fab", className)} {...rest} />;
  },
);

export interface RailBottomProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Optional trailing section (`.rail-bottom`, margin-block-start:auto) pushed
 * to the rail's end for settings/profile items.
 */
export const RailBottom = forwardRef<HTMLDivElement, RailBottomProps>(
  function RailBottom({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("rail-bottom", className)} {...rest} />;
  },
);
