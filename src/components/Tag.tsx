import { forwardRef, type HTMLAttributes, type MouseEventHandler } from "react";
import { cx } from "../lib/cx";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Fully rounded ends. */
  rounded?: boolean;
  /** Wraps the label in an `<a>` so the chip is navigable. */
  href?: string;
  /**
   * Names what the remove button removes (e.g. "Remove frontend", not just
   * "Remove"). Providing it renders a `button.tag-remove` after the label.
   */
  removeLabel?: string;
  /** Click handler for the remove button. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * A label/keyword chip, optionally linked and optionally removable
 * (`<span class="tag">`). The chip itself is non-interactive; interactivity
 * lives on the inner link / remove button so it stays keyboard-reachable.
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { rounded, href, removeLabel, onRemove, className, children, ...rest },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cx("tag", rounded && "tag-rounded", className)}
      {...rest}
    >
      {href !== undefined ? <a href={href}>{children}</a> : children}
      {removeLabel !== undefined && (
        <button
          type="button"
          className="tag-remove"
          aria-label={removeLabel}
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
});
