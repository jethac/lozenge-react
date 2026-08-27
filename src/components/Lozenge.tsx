import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type LozengeStatus =
  | "default"
  | "inprogress"
  | "moved"
  | "new"
  | "removed"
  | "success";

export interface LozengeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Workflow status — sets the mandatory color variant. */
  status: LozengeStatus;
  /** Bold (solid background) emphasis. */
  bold?: boolean;
}

/**
 * The signature Jira-style status pill. Purely presentational text; the label
 * itself carries the state, color is never the only signal.
 */
export const Lozenge = forwardRef<HTMLSpanElement, LozengeProps>(
  function Lozenge({ status, bold, className, children, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={cx(
          "lozenge",
          `lozenge-${status}`,
          bold && "lozenge-bold",
          className,
        )}
        {...rest}
      >
        {children}
      </span>
    );
  },
);
