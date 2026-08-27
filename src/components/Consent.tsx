import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface ConsentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Short accessible name for the bar (e.g. "Cookie consent") — required so
   * the region landmark is discoverable.
   */
  "aria-label": string;
  /** Pin bottom-center of the viewport, above flags. */
  fixed?: boolean;
  /**
   * Button cluster for the consent choices. Reject and Accept should carry
   * equal prominence (e.g. `.btn` next to `.btn-primary`);
   * preferences/customise is usually a subtle-link button.
   */
  actions: ReactNode;
  /**
   * When set, renders the optional close button wired to this handler. It
   * must be equivalent to Reject — dismissal must never be treated as
   * consent.
   */
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name for the dismiss button. */
  dismissLabel?: string;
}

/**
 * GDPR-style cookie/consent notice bar: legal copy (children) with inline
 * links and a cluster of choice buttons. Static in document flow by default;
 * `fixed` pins it bottom-center of the viewport. Non-modal: it must not trap
 * focus or block reading, and is never auto-focused on load. The component
 * is purely presentational — showing, hiding, and persisting the choice are
 * the app's job.
 */
export const Consent = forwardRef<HTMLDivElement, ConsentProps>(
  function Consent(
    {
      fixed,
      actions,
      onDismiss,
      dismissLabel = "Dismiss",
      role = "region",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role={role}
        className={cx("consent", fixed && "consent-fixed", className)}
        {...rest}
      >
        <div className="consent-body">{children}</div>
        <div className="consent-actions">{actions}</div>
        {onDismiss !== undefined && (
          <button
            type="button"
            className="consent-dismiss"
            aria-label={dismissLabel}
            onClick={onDismiss}
          >
            ×
          </button>
        )}
      </div>
    );
  },
);
