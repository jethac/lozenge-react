import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface BottomNavProps extends HTMLAttributes<HTMLElement> {
  /** Pins the bar to the bottom of the viewport (`.bottom-nav-fixed`). */
  fixed?: boolean;
}

/**
 * Bottom navigation bar (`<nav class="bottom-nav">`) for phone-width layouts:
 * a 56px frosted-glass bar of 3–5 evenly-spread top-level destinations, each
 * an icon over an 11px label with a pill indicator behind the active item's
 * icon. Use exactly one per page — fewer than 3 destinations wants tabs, more
 * than 5 wants a sidebar or rail. Never nest another glass surface inside it,
 * and when `fixed`, give the scrolling content enough bottom padding that
 * nothing hides behind the bar.
 */
export const BottomNav = forwardRef<HTMLElement, BottomNavProps>(
  function BottomNav({ fixed, className, ...rest }, ref) {
    return (
      <nav
        ref={ref}
        className={cx("bottom-nav", fixed && "bottom-nav-fixed", className)}
        {...rest}
      />
    );
  },
);

export interface BottomNavItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** 20px icon slot content (inline SVG, `aria-hidden` — decorative). */
  icon: ReactNode;
  /**
   * 11px label under the icon. Omit only when the icon is universally
   * understood — then give the item an `aria-label`.
   */
  label?: ReactNode;
  /**
   * Marks the current destination (exactly one per bar): adds `.active` and
   * `aria-current="page"` (required by the contract).
   */
  active?: boolean;
}

/** One destination (`<a class="bottom-nav-item">`), flexed to equal widths. */
export const BottomNavItem = forwardRef<HTMLAnchorElement, BottomNavItemProps>(
  function BottomNavItem(
    { icon, label, active, className, "aria-current": ariaCurrent, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        aria-current={ariaCurrent ?? (active ? "page" : undefined)}
        className={cx("bottom-nav-item", active && "active", className)}
        {...rest}
      >
        <span className="bottom-nav-icon">{icon}</span>
        {label != null && <span className="bottom-nav-label">{label}</span>}
      </a>
    );
  },
);
