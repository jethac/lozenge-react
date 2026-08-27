import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type ButtonAppearance =
  | "primary"
  | "warning"
  | "danger"
  | "subtle"
  | "link"
  | "subtle-link";

interface ButtonBaseProps {
  /** Emphasis variant; omit for the standard button. */
  appearance?: ButtonAppearance;
  /** Reduced height for dense surfaces. */
  compact?: boolean;
  /** Square icon-only button — requires `aria-label`. */
  icon?: boolean;
  /** Full-width block button. */
  block?: boolean;
  /** Fully rounded ends. */
  pill?: boolean;
  /** Toggled-on state. */
  active?: boolean;
}

export interface ButtonProps
  extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

function buttonClass(p: ButtonBaseProps, className?: string) {
  return cx(
    "btn",
    p.appearance && `btn-${p.appearance}`,
    p.compact && "btn-compact",
    p.icon && "btn-icon",
    p.block && "btn-block",
    p.pill && "btn-pill",
    p.active && "active",
    className,
  );
}

/** The standard action button (`<button class="btn">`). */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { appearance, compact, icon, block, pill, active, className, type = "button", ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClass({ appearance, compact, icon, block, pill, active }, className)}
        {...rest}
      />
    );
  },
);

export interface LinkButtonProps
  extends ButtonBaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

/** Navigation styled as a button (`<a class="btn">`). For actions, use Button. */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(
    { appearance, compact, icon, block, pill, active, className, ...rest },
    ref,
  ) {
    return (
      <a
        ref={ref}
        className={buttonClass({ appearance, compact, icon, block, pill, active }, className)}
        {...rest}
      />
    );
  },
);

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Accessible name; when given the group gets `role="group"`. */
  label?: string;
}

/** Plain flex wrapper of direct Button children. */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup({ label, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role={label ? "group" : undefined}
        aria-label={label}
        className={cx("btn-group", className)}
        {...rest}
      />
    );
  },
);
