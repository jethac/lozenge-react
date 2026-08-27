import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface MegaMenuProps extends HTMLAttributes<HTMLElement> {
  /** The id its trigger's `popovertarget` points at. */
  id: string;
  /** Accessible name for the panel (`aria-label`, required by the contract). */
  label: string;
}

/**
 * The wide marketing-nav panel (`<nav popover class="mega-menu">`) opened from
 * a navbar item, zero JS: a MegaMenuTrigger opens this popover sibling — a
 * glass surface of MegaMenuGroup columns. The platform supplies open/close,
 * light-dismiss, Esc, and the top layer. Render it OUTSIDE the glass navbar,
 * directly adjacent as a sibling — glass surfaces never nest. Honest
 * semantics: this is navigation (`<nav>` + `aria-label`), not
 * `role=menu`/`menuitem`. For action menus use dropdowns or the menubar —
 * mega-menus are navigation.
 */
export const MegaMenu = forwardRef<HTMLElement, MegaMenuProps>(
  function MegaMenu({ id, label, className, popover = "", ...rest }, ref) {
    return (
      <nav
        ref={ref}
        id={id}
        popover={popover}
        aria-label={label}
        className={cx("mega-menu", className)}
        {...rest}
      />
    );
  },
);

export interface MegaMenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** id of the MegaMenu this trigger opens (`popovertarget`). */
  menuId: string;
}

/**
 * Navbar item that opens the panel (`<button class="nav-link">` +
 * `popovertarget`). Place it where a nav link would go, e.g. inside an
 * `<li>` of NavbarNav.
 */
export const MegaMenuTrigger = forwardRef<
  HTMLButtonElement,
  MegaMenuTriggerProps
>(function MegaMenuTrigger(
  { menuId, className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      popoverTarget={menuId}
      className={cx("nav-link", className)}
      {...rest}
    />
  );
});

export interface MegaMenuGroupProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * One column of the panel grid (`.mega-menu-group`): an optional
 * MegaMenuHeading over MegaMenuItem links. Groups flow in an auto-fit grid
 * (min 200px tracks). Keep groups short — a mega panel is an index of
 * destinations, not a sitemap.
 */
export const MegaMenuGroup = forwardRef<HTMLDivElement, MegaMenuGroupProps>(
  function MegaMenuGroup({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("mega-menu-group", className)} {...rest} />
    );
  },
);

export interface MegaMenuHeadingProps extends HTMLAttributes<HTMLDivElement> {}

/** Uppercase group label (`.mega-menu-heading`), heading-100 style. */
export const MegaMenuHeading = forwardRef<HTMLDivElement, MegaMenuHeadingProps>(
  function MegaMenuHeading({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("mega-menu-heading", className)} {...rest} />
    );
  },
);

export interface MegaMenuItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Optional one-line description under the title. */
  description?: ReactNode;
}

/**
 * A destination link (`<a class="mega-menu-item">`): children render as the
 * `.mega-menu-item-title`, `description` as the one-line
 * `.mega-menu-item-description`.
 */
export const MegaMenuItem = forwardRef<HTMLAnchorElement, MegaMenuItemProps>(
  function MegaMenuItem({ description, className, children, ...rest }, ref) {
    return (
      <a ref={ref} className={cx("mega-menu-item", className)} {...rest}>
        <span className="mega-menu-item-title">{children}</span>
        {description != null && (
          <span className="mega-menu-item-description">{description}</span>
        )}
      </a>
    );
  },
);
