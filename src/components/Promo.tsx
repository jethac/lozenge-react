import {
  forwardRef,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export type PromoTone = "info" | "warning" | "error" | "success" | "discovery";

export interface PromoProps extends HTMLAttributes<HTMLElement> {
  /** Root element; `li` when tiles form a real list. */
  as?: "div" | "article" | "li";
  /** Color family for the media tint and saturated body. */
  tone?: PromoTone;
}

/**
 * Marketing promo/news tile: a 4:3 media zone over a saturated
 * family-colored body carrying a kicker pill, an optional meta line, a
 * display title, and an arrow CTA that stretches across the whole card.
 * Loud and self-linking — for marketing/docs surfaces, not app work views.
 * Fluid width and full height; size it from your grid.
 */
export const Promo = forwardRef<HTMLElement, PromoProps>(function Promo(
  { as = "article", tone, className, ...rest },
  ref,
) {
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cx("promo", tone && `promo-${tone}`, className)}
      {...rest}
    />
  );
});

export interface PromoMediaProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * 4:3 media zone tinted with the family's subtle background; drop in an
 * `<img>` (object-fit cover, `alt=""` when decorative). Omit for a
 * text-only tile.
 */
export const PromoMedia = forwardRef<HTMLDivElement, PromoMediaProps>(
  function PromoMedia({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("promo-media", className)} {...rest} />;
  },
);

export interface PromoBodyProps extends HTMLAttributes<HTMLDivElement> {}

/** The content column: kicker, meta, title, CTA. The CTA pins to the bottom so tiles in a row stay aligned. */
export const PromoBody = forwardRef<HTMLDivElement, PromoBodyProps>(
  function PromoBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("promo-body", className)} {...rest} />;
  },
);

export interface PromoKickerProps extends HTMLAttributes<HTMLSpanElement> {}

/** Content-type pill (Event, Podcast…). Author in normal case — CSS uppercases it. */
export const PromoKicker = forwardRef<HTMLSpanElement, PromoKickerProps>(
  function PromoKicker({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("promo-kicker", className)} {...rest} />
    );
  },
);

export interface PromoMetaProps extends HTMLAttributes<HTMLDivElement> {}

/** Meta line (date · location · runtime): spans of text, optional inline 16px currentColor svg icons. */
export const PromoMeta = forwardRef<HTMLDivElement, PromoMetaProps>(
  function PromoMeta({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("promo-meta", className)} {...rest} />;
  },
);

export interface PromoTitleProps extends HTMLAttributes<HTMLElement> {
  /** A plain `div` or a real `h2`/`h3` — the class zeroes the margin. */
  as?: "div" | "h2" | "h3";
}

/** Display title (heading 500 scale). */
export const PromoTitle = forwardRef<HTMLElement, PromoTitleProps>(
  function PromoTitle({ as = "div", className, ...rest }, ref) {
    const Tag = as as "div";
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cx("promo-title", className)}
        {...rest}
      />
    );
  },
);

export interface PromoCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * The arrow CTA link. It stretches over the whole card via `::before`, so it
 * is the card's only interactive element — put secondary actions outside the
 * tile. When the text is generic ("Read now"), give an `aria-label` carrying
 * the title ("Read now: <title>").
 */
export const PromoCta = forwardRef<HTMLAnchorElement, PromoCtaProps>(
  function PromoCta({ className, ...rest }, ref) {
    return <a ref={ref} className={cx("promo-cta", className)} {...rest} />;
  },
);
