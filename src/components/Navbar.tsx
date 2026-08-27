import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Bold accent-colored version (`.navbar-primary`). */
  primary?: boolean;
}

/**
 * Sticky top navigation bar (`<nav class="navbar">`): brand, horizontal nav
 * links, and a right-aligned actions cluster. A frosted-glass surface when
 * materials are enabled — use exactly one per page as the global app header,
 * and never nest another glass surface (dropdown-menu, flag, modal) inside it.
 * When the page has more than one `<nav>` landmark, pass `aria-label`.
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { primary, className, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      className={cx("navbar", primary && "navbar-primary", className)}
      {...rest}
    />
  );
});

export interface NavbarBrandProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

/** Logo/product link (`<a class="navbar-brand">`), typically the first child. */
export const NavbarBrand = forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  function NavbarBrand({ className, ...rest }, ref) {
    return <a ref={ref} className={cx("navbar-brand", className)} {...rest} />;
  },
);

export interface NavbarNavProps extends HTMLAttributes<HTMLUListElement> {}

/**
 * The horizontal link list (`<ul class="navbar-nav">`). Children are `<li>`
 * elements each containing a NavLink.
 */
export const NavbarNav = forwardRef<HTMLUListElement, NavbarNavProps>(
  function NavbarNav({ className, ...rest }, ref) {
    return (
      <ul ref={ref} className={cx("navbar-nav", className)} {...rest} />
    );
  },
);

export interface NavbarActionsProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Right-aligned cluster (`.navbar-actions`, margin-left:auto) for buttons,
 * search, and the user avatar.
 */
export const NavbarActions = forwardRef<HTMLDivElement, NavbarActionsProps>(
  function NavbarActions({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("navbar-actions", className)} {...rest} />
    );
  },
);

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks the current page: adds `.active` and `aria-current="page"`. */
  active?: boolean;
}

/** A navbar navigation link (`<a class="nav-link">`). */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink(
    { active, className, "aria-current": ariaCurrent, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        aria-current={ariaCurrent ?? (active ? "page" : undefined)}
        className={cx("nav-link", active && "active", className)}
        {...rest}
      />
    );
  },
);
