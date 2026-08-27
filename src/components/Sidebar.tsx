import {
  forwardRef,
  type AnchorHTMLAttributes,
  type DetailsHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {}

/**
 * Project sidebar navigation (`<aside class="sidebar">`): a fixed-width
 * vertical column with a project header, section labels, and SidebarItem
 * links. Use SidebarGroup for collapsible sections with zero-JS
 * exclusive-accordion behavior. Wrap link runs in `<nav>` (labelled) for
 * landmark navigation.
 */
export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  { className, ...rest },
  ref,
) {
  return <aside ref={ref} className={cx("sidebar", className)} {...rest} />;
});

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Project identity row (`.sidebar-header`): a square avatar plus a min-width:0
 * wrapper holding SidebarTitle and SidebarSubtitle (both truncate).
 */
export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  function SidebarHeader({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("sidebar-header", className)} {...rest} />
    );
  },
);

export interface SidebarTitleProps extends HTMLAttributes<HTMLDivElement> {}

/** Truncating project name (`.sidebar-title`) inside the header. */
export const SidebarTitle = forwardRef<HTMLDivElement, SidebarTitleProps>(
  function SidebarTitle({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("sidebar-title", className)} {...rest} />
    );
  },
);

export interface SidebarSubtitleProps extends HTMLAttributes<HTMLDivElement> {}

/** Truncating secondary line (`.sidebar-subtitle`) inside the header. */
export const SidebarSubtitle = forwardRef<HTMLDivElement, SidebarSubtitleProps>(
  function SidebarSubtitle({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("sidebar-subtitle", className)} {...rest} />
    );
  },
);

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Uppercase section label (`.sidebar-section`) as a plain div. For a
 * collapsible section, use SidebarGroup instead — its `label` renders the
 * summary variant of this class.
 */
export const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
  function SidebarSection({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("sidebar-section", className)} {...rest} />
    );
  },
);

export interface SidebarItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Marks the current view: adds `.active` and `aria-current="page"`. */
  active?: boolean;
}

/** Navigation link (`<a class="sidebar-item">`). */
export const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(
  function SidebarItem(
    { active, className, "aria-current": ariaCurrent, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        aria-current={ariaCurrent ?? (active ? "page" : undefined)}
        className={cx("sidebar-item", active && "active", className)}
        {...rest}
      />
    );
  },
);

export interface SidebarGroupProps
  extends DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Section label, rendered as the `<summary class="sidebar-section">`. */
  label: ReactNode;
  /**
   * Native `<details name>`; sibling groups sharing a name form an exclusive
   * accordion with zero JS. Defaults to `"sidebar"`; pass `name=""` to allow
   * multiple open sections.
   */
  name?: string;
}

/**
 * Collapsible sidebar section (`<details class="sidebar-group">`) built on
 * native details/summary — expand/collapse semantics and keyboard support come
 * from the platform. Add `open` to the group containing the current page.
 */
export const SidebarGroup = forwardRef<HTMLDetailsElement, SidebarGroupProps>(
  function SidebarGroup(
    { label, name = "sidebar", className, children, ...rest },
    ref,
  ) {
    return (
      <details
        ref={ref}
        name={name || undefined}
        className={cx("sidebar-group", className)}
        {...rest}
      >
        <summary className="sidebar-section">{label}</summary>
        {children}
      </details>
    );
  },
);
