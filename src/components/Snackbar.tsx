import {
  forwardRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Pins the snackbar bottom-center of the viewport (`.snackbar-fixed`). */
  fixed?: boolean;
  /**
   * Live-region role so screen readers announce the asynchronous message.
   * `"status"` by default; use `"alert"` for errors.
   */
  role?: "status" | "alert";
  /** Optional trailing action — use `<SnackbarAction>` (at most one). */
  action?: ReactNode;
}

/**
 * Material-style snackbar: a single-line transient notification on the
 * inverted tooltip surface, with an optional inline action. Static in document
 * flow by default (compose into custom stacks); `fixed` pins it bottom-center
 * of the viewport. Children become the `.snackbar-message` text — keep it to
 * one line (it truncates); for richer multi-line toasts use a flag instead.
 * Because snackbars are transient, the action should also be reachable
 * somewhere persistent.
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  function Snackbar(
    { fixed, role = "status", action, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role={role}
        className={cx("snackbar", fixed && "snackbar-fixed", className)}
        {...rest}
      >
        <span className="snackbar-message">{children}</span>
        {action}
      </div>
    );
  },
);

export interface SnackbarActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * The snackbar's trailing action as a real `<button class="snackbar-action">`:
 * inherits the tooltip text color, distinguished by underline + semibold.
 */
export const SnackbarAction = forwardRef<
  HTMLButtonElement,
  SnackbarActionProps
>(function SnackbarAction({ className, type = "button", ...rest }, ref) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx("snackbar-action", className)}
      {...rest}
    />
  );
});
