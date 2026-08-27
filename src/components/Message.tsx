import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export type MessageTone = "info" | "warning" | "error" | "success" | "discovery";

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Contextual tone — sets the colored edge bar. */
  tone?: MessageTone;
  /** Bold heading line, rendered first. Make it state the severity in text. */
  title?: string;
  /** Row of action links rendered after the body text. */
  actions?: ReactNode;
}

/**
 * Inline section message (callout) with a colored edge bar: contextual info,
 * warnings, errors, successes, or discovery announcements embedded in page
 * flow. Tone is conveyed by color only — make the text itself state the
 * severity. Messages inserted dynamically should get `role="status"` (or
 * `role="alert"` for errors). For full-width page-level announcements use
 * Banner; for floating toasts use Flag.
 */
export const Message = forwardRef<HTMLDivElement, MessageProps>(
  function Message({ tone, title, actions, className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx("message", tone && `message-${tone}`, className)}
        {...rest}
      >
        {title !== undefined && <div className="message-title">{title}</div>}
        {children}
        {actions !== undefined && <div className="message-actions">{actions}</div>}
      </div>
    );
  },
);

export type BannerTone = "warning" | "error" | "inverse";

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Bold tone; `inverse` uses the tooltip surface pair (events, launches). */
  tone?: BannerTone;
}

/**
 * Full-width single-line page banner (maintenance notices, read-only mode,
 * outages). Sits above or below the navbar spanning the viewport; content is
 * centered and links inherit the bold text color. If a banner appears
 * dynamically (e.g. connection lost) give it `role="status"` / `role="alert"`.
 */
export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  function Banner({ tone, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx("banner", tone && `banner-${tone}`, className)}
        {...rest}
      />
    );
  },
);

export type FlagTone = "info" | "warning" | "error" | "success" | "discovery";

export interface FlagProps extends HTMLAttributes<HTMLDivElement> {
  /** Bold tone variant recoloring the whole flag (success/error toasts…). */
  tone?: FlagTone;
  /** Pin to the viewport (bottom-left toast position). */
  fixed?: boolean;
  /** Heading line of the toast. */
  title: string;
  /** Optional leading icon block (e.g. an `<IssueType>` square). */
  icon?: ReactNode;
  /** Row of action links under the description. */
  actions?: ReactNode;
  /** When set, renders the trailing × dismiss button wired to this handler. */
  onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name for the dismiss button (its content is just ×). */
  dismissLabel?: string;
}

/**
 * Floating toast notification (bottom-left in Jira): icon, content block
 * (title/description/actions), and a dismiss button. Children render as the
 * `.flag-description`. Toasts appear asynchronously — give the flag
 * `role="status"` (or `role="alert"` for error flags) so screen readers
 * announce it. The flag is a glass surface: never nest another glass surface
 * (dropdown-menu, modal, navbar, another flag) inside it, and never mount a
 * flag inside one.
 */
export const Flag = forwardRef<HTMLDivElement, FlagProps>(
  function Flag(
    {
      tone,
      fixed,
      title,
      icon,
      actions,
      onDismiss,
      dismissLabel = "Dismiss",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cx("flag", tone && `flag-${tone}`, fixed && "flag-fixed", className)}
        {...rest}
      >
        {icon !== undefined && <div className="flag-icon">{icon}</div>}
        <div className="flag-content">
          <div className="flag-title">{title}</div>
          {children !== undefined && children !== null && (
            <div className="flag-description">{children}</div>
          )}
          {actions !== undefined && <div className="flag-actions">{actions}</div>}
        </div>
        {onDismiss !== undefined && (
          <button
            type="button"
            className="flag-dismiss"
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
