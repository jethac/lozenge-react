import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/cx";

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /** Root element; a hero is normally the first `section`/`header` of a marketing/docs page. */
  as?: "section" | "div" | "header";
  /** Faint hairline grid backdrop that fades radially behind the content. */
  grid?: boolean;
}

/**
 * Marketing page-topper: a centered column with a display-size title, a
 * measured lede paragraph, and a CTA row. One hero per page, and its title
 * is the h1. For in-app empty regions use `.empty-state` instead — heroes
 * belong to marketing/docs surfaces.
 */
export const Hero = forwardRef<HTMLElement, HeroProps>(function Hero(
  { as = "section", grid, className, ...rest },
  ref,
) {
  const Tag = as as "section";
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={cx("hero", grid && "hero-grid", className)}
      {...rest}
    />
  );
});

export interface HeroTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading element — the hero title should be the page's `h1`. */
  as?: "h1" | "h2" | "h3";
}

/** The display headline (68px/76px, semibold, max-width 15ch); the class zeroes its margin. */
export const HeroTitle = forwardRef<HTMLHeadingElement, HeroTitleProps>(
  function HeroTitle({ as = "h1", className, ...rest }, ref) {
    const Tag = as;
    return <Tag ref={ref} className={cx("hero-title", className)} {...rest} />;
  },
);

export interface HeroAccentProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * Accent-colored run inside the title. Decoration, not emphasis: it must
 * restate or color-amplify a word, never carry meaning that would be lost
 * without the color.
 */
export const HeroAccent = forwardRef<HTMLSpanElement, HeroAccentProps>(
  function HeroAccent({ className, ...rest }, ref) {
    return <span ref={ref} className={cx("hero-accent", className)} {...rest} />;
  },
);

export interface HeroLedeProps extends HTMLAttributes<HTMLParagraphElement> {}

/** Supporting paragraph: max-width 640px, 20px/30px, subtle. */
export const HeroLede = forwardRef<HTMLParagraphElement, HeroLedeProps>(
  function HeroLede({ className, ...rest }, ref) {
    return <p ref={ref} className={cx("hero-lede", className)} {...rest} />;
  },
);

export interface HeroActionsProps extends HTMLAttributes<HTMLDivElement> {}

/** Centered CTA row with 12px gaps, wrapping allowed — typically a stadium primary pill next to a subtle link. */
export const HeroActions = forwardRef<HTMLDivElement, HeroActionsProps>(
  function HeroActions({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("hero-actions", className)} {...rest} />;
  },
);
