import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface MenubarProps extends HTMLAttributes<HTMLElement> {
  /** Accessible name for the menu bar (`aria-label`, required by the contract). */
  label: string;
}

/**
 * Desktop-style menu bar (`<nav class="menubar">` — File/Edit/View with
 * cascading submenus), zero JS. Each MenubarTrigger opens its adjacent
 * MenubarMenu popover; adjacency drives the pressed state via
 * `:has(+ :popover-open)`, so render each trigger immediately followed by its
 * menu. Intentionally NOT `role=menubar` out of the box: without roving focus,
 * honest semantics are a nav of buttons opening menus. Load
 * `/lozenge-sprinkle.js` and add the roles yourself for full ARIA menu
 * semantics.
 */
export const Menubar = forwardRef<HTMLElement, MenubarProps>(function Menubar(
  { label, className, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      aria-label={label}
      className={cx("menubar", className)}
      {...rest}
    />
  );
});

export interface MenubarTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** id of the MenubarMenu this trigger opens (`popovertarget`). */
  menuId: string;
}

/**
 * Top-level menu trigger (`<button class="menubar-trigger">`). Must be
 * immediately followed by its MenubarMenu sibling.
 */
export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  MenubarTriggerProps
>(function MenubarTrigger(
  { menuId, className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      popoverTarget={menuId}
      className={cx("menubar-trigger", className)}
      {...rest}
    />
  );
});

export interface MenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** The id its trigger's `popovertarget` points at. */
  id: string;
  /**
   * Renders the menu as a submenu (`.menubar-submenu`): nest it inside the
   * parent menu's DOM right after its MenubarItem invoker, so opening it keeps
   * the ancestor menu open and it anchors to the inline-end of that item.
   */
  submenu?: boolean;
}

/**
 * A popover menu on the `.dropdown-menu` skin. The platform supplies
 * open/close, light-dismiss, Esc, and the top layer.
 */
export const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(
  function MenubarMenu({ id, submenu, className, popover = "", ...rest }, ref) {
    return (
      <div
        ref={ref}
        id={id}
        popover={popover}
        className={cx("dropdown-menu", submenu && "menubar-submenu", className)}
        {...rest}
      />
    );
  },
);

export interface MenubarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * id of the menu to hide on activation — usually the top-level menu, so the
   * whole chain dismisses (`popovertarget` + `popovertargetaction="hide"`).
   */
  dismisses?: string;
  /**
   * id of the submenu this item opens; adds `.menubar-subtrigger` (chevron).
   * Mutually exclusive with `dismisses`.
   */
  opens?: string;
  /** Keyboard shortcut hint, rendered as a trailing `.menubar-kbd`. */
  kbd?: ReactNode;
  /** Marks the current choice (`.selected`). */
  selected?: boolean;
}

/** A menu item (`<button class="dropdown-item">`) inside a MenubarMenu. */
export const MenubarItem = forwardRef<HTMLButtonElement, MenubarItemProps>(
  function MenubarItem(
    {
      dismisses,
      opens,
      kbd,
      selected,
      disabled,
      className,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        popoverTarget={opens ?? dismisses}
        popoverTargetAction={opens ? undefined : dismisses ? "hide" : undefined}
        disabled={disabled}
        className={cx(
          "dropdown-item",
          opens && "menubar-subtrigger",
          selected && "selected",
          disabled && "disabled",
          className,
        )}
        {...rest}
      >
        {children}
        {kbd != null && <span className="menubar-kbd">{kbd}</span>}
      </button>
    );
  },
);

export interface MenubarDividerProps extends HTMLAttributes<HTMLDivElement> {}

/** Separator (`.dropdown-divider`) between item groups inside a MenubarMenu. */
export const MenubarDivider = forwardRef<HTMLDivElement, MenubarDividerProps>(
  function MenubarDivider({ className, ...rest }, ref) {
    return (
      <div ref={ref} className={cx("dropdown-divider", className)} {...rest} />
    );
  },
);
