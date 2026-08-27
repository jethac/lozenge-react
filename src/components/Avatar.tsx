import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarPresence = "online" | "busy" | "offline";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Mandatory size — the base `.avatar` class sets no dimensions. */
  size: AvatarSize;
  /** Presence dot (color-only ::after) — convey presence in text too where it matters. */
  presence?: AvatarPresence;
  /** Square variant for projects/apps instead of the circular person avatar. */
  square?: boolean;
  /** Optional photo URL; omit it and pass 1–2 characters as children for the initials fallback. */
  src?: string;
  /** Required with `src`: the full name for assistive tech (initials alone don't identify a person). */
  alt?: string;
}

/**
 * Circular user/entity avatar showing an image or initials fallback, with
 * optional presence dot and square variant for projects/apps
 * (`<span class="avatar avatar-md">`).
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { size, presence, square, src, alt, className, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx(
        "avatar",
        `avatar-${size}`,
        presence && `avatar-${presence}`,
        square && "avatar-square",
        className,
      )}
      {...rest}
    >
      {src !== undefined ? <img src={src} alt={alt} /> : children}
    </span>
  );
});

export interface AvatarGroupProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Accessible name for the whole stack (e.g. "Watchers: Alex, Bo, Cam and 4
   * others"); when given the group gets `role="group"`.
   */
  label?: string;
}

/**
 * Overlapping horizontal stack of avatars, each gaining a surface-colored
 * ring (`<span class="avatar-group">`). Use the same size for all children;
 * truncation counters ("+4") are plain avatars.
 */
export const AvatarGroup = forwardRef<HTMLSpanElement, AvatarGroupProps>(
  function AvatarGroup({ label, className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        role={label ? "group" : undefined}
        aria-label={label}
        className={cx("avatar-group", className)}
        {...rest}
      />
    );
  },
);
