import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Align the menu to the inline-end edge of its anchor. */
  end?: boolean;
}

/**
 * Dropdown menu, zero JS. Preferred recipe: a trigger button with
 * `popoverTarget` pointing at this menu's `id` opens the `[popover]` menu
 * anchored to it (implicit-anchor positioning) — the platform supplies
 * open/close, light-dismiss, Esc, top-layer, and focus return. Items close
 * the menu on activation via `popoverTarget` + `popoverTargetAction="hide"`;
 * plain links just navigate. Give the menu the `id` your trigger's
 * `popoverTarget` points at.
 */
export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  function DropdownMenu({ end, popover = "auto", className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        popover={popover}
        className={cx("dropdown-menu", end && "dropdown-menu-end", className)}
        {...rest}
      />
    );
  },
);

interface DropdownItemBaseProps {
  /** Marks the current choice. */
  selected?: boolean;
  /** Destructive-action emphasis. */
  danger?: boolean;
  /** Subtle secondary line rendered under the item label. */
  description?: ReactNode;
}

function dropdownItemClass(p: DropdownItemBaseProps, className?: string) {
  return cx(
    "dropdown-item",
    p.selected && "selected",
    p.danger && "danger",
    className,
  );
}

export interface DropdownItemProps
  extends DropdownItemBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Action item (`<button class="dropdown-item">`). Close the menu on
 * activation with `popoverTarget={menuId}` + `popoverTargetAction="hide"`.
 * For navigation use DropdownLinkItem.
 */
export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  function DropdownItem(
    { selected, danger, description, className, children, type = "button", ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={dropdownItemClass({ selected, danger }, className)}
        {...rest}
      >
        {children}
        {description !== undefined && (
          <span className="dropdown-item-description">{description}</span>
        )}
      </button>
    );
  },
);

export interface DropdownLinkItemProps
  extends DropdownItemBaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

/** Navigation item (`<a class="dropdown-item">`). For actions, use DropdownItem. */
export const DropdownLinkItem = forwardRef<HTMLAnchorElement, DropdownLinkItemProps>(
  function DropdownLinkItem(
    { selected, danger, description, className, children, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        className={dropdownItemClass({ selected, danger }, className)}
        {...rest}
      >
        {children}
        {description !== undefined && (
          <span className="dropdown-item-description">{description}</span>
        )}
      </a>
    );
  },
);

export interface DropdownHeadingProps extends HTMLAttributes<HTMLDivElement> {}
/** Uppercase group heading inside the menu. */
export const DropdownHeading = forwardRef<HTMLDivElement, DropdownHeadingProps>(
  function DropdownHeading({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("dropdown-heading", className)} {...rest} />;
  },
);

export interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {}
/** Separator rule between item groups. */
export const DropdownDivider = forwardRef<HTMLDivElement, DropdownDividerProps>(
  function DropdownDivider({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("dropdown-divider", className)} {...rest} />;
  },
);
