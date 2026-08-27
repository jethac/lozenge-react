import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Accessible name for the strip (`aria-label`) — required, the scroller is
   * a meaningful region.
   */
  label: string;
  /** Center-snapping single-feature strip (`.carousel-hero`). */
  hero?: boolean;
}

/**
 * Scroll-snap carousel: a horizontally scrolling strip of snap-aligned
 * cards. Zero JS — scrolling, snapping, momentum, keyboard (when focusable
 * content is inside) and RTL all come from the platform's scroll machinery.
 */
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  function Carousel({ label, hero, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        aria-label={label}
        className={cx("carousel", hero && "carousel-hero", className)}
        {...rest}
      />
    );
  },
);

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  /** 300px card instead of the default width. */
  wide?: boolean;
  /** Caption pinned inside the item (`.carousel-item-caption`). */
  caption?: ReactNode;
}

/** One snap-aligned item. Image-only items need a text alternative (img alt or a caption). */
export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  function CarouselItem({ wide, caption, className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx("carousel-item", wide && "carousel-item-wide", className)}
        {...rest}
      >
        {children}
        {caption !== undefined && (
          <div className="carousel-item-caption">{caption}</div>
        )}
      </div>
    );
  },
);
