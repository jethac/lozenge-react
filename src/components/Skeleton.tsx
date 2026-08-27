import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export type SkeletonShape = "text" | "heading" | "avatar" | "card";
export type SkeletonAvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape mimicking the loading content; omit for a plain rect. */
  shape?: SkeletonShape;
  /** For `shape="avatar"`: match the size class of the avatar it stands in for. */
  avatarSize?: SkeletonAvatarSize;
}

/**
 * Loading placeholder: a sunken rounded rect with a shimmering gradient sweep
 * (`<div class="skeleton">`). Decorative — always rendered with
 * `aria-hidden="true"`; give the region being loaded `aria-busy="true"`.
 * Never put text content inside a skeleton.
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({ shape, avatarSize, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cx(
          "skeleton",
          shape && `skeleton-${shape}`,
          avatarSize && `skeleton-avatar-${avatarSize}`,
          className,
        )}
        {...rest}
      />
    );
  },
);

export interface SkeletonParagraphProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of `.skeleton-text` lines to stack (the last auto-shortens to 60%). */
  lines?: number;
}

/**
 * Vertical stack of `.skeleton-text` lines with prose-like rhythm
 * (`<div class="skeleton-paragraph">`): 8px row gap, final line stops at 60%
 * width so the block reads as a paragraph rather than a box.
 */
export const SkeletonParagraph = forwardRef<
  HTMLDivElement,
  SkeletonParagraphProps
>(function SkeletonParagraph({ lines = 3, className, children, ...rest }, ref) {
  return (
    <div ref={ref} className={cx("skeleton-paragraph", className)} {...rest}>
      {children ??
        Array.from({ length: lines }, (_, i) => (
          <Skeleton key={i} shape="text" />
        ))}
    </div>
  );
});
