import {
  Promo,
  PromoBody,
  PromoCta,
  PromoKicker,
  PromoMedia,
  PromoMeta,
  PromoTitle,
} from "../../src/components/Promo";

export const meta = { id: "promo", title: "Promo" };

export default function PromoSection() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
        alignItems: "stretch",
      }}
    >
      <Promo tone="info">
        <PromoMedia />
        <PromoBody>
          <PromoKicker>Event</PromoKicker>
          <PromoMeta>
            <span>Oct 6–8</span>
            <span>Amsterdam</span>
          </PromoMeta>
          <PromoTitle>The runtime-theming workshop, live</PromoTitle>
          <PromoCta
            href="#promo"
            aria-label="Watch now: The runtime-theming workshop, live"
          >
            Watch now
          </PromoCta>
        </PromoBody>
      </Promo>

      <Promo tone="discovery">
        <PromoBody>
          <PromoKicker>Announcement</PromoKicker>
          <PromoTitle as="h3">Theme axes graduate from the lab</PromoTitle>
          <PromoCta
            href="#promo"
            aria-label="Read now: Theme axes graduate from the lab"
          >
            Read now
          </PromoCta>
        </PromoBody>
      </Promo>

      <Promo tone="success">
        <PromoMedia />
        <PromoBody>
          <PromoKicker>Case study</PromoKicker>
          <PromoMeta>
            <span>8 min read</span>
          </PromoMeta>
          <PromoTitle>Zero-JS modals in production</PromoTitle>
          <PromoCta href="#promo" aria-label="Read now: Zero-JS modals in production">
            Read now
          </PromoCta>
        </PromoBody>
      </Promo>

      <Promo tone="warning">
        <PromoBody>
          <PromoKicker>Deprecation</PromoKicker>
          <PromoMeta>
            <span>Effective 2.0</span>
          </PromoMeta>
          <PromoTitle>Legacy color tokens retire this fall</PromoTitle>
          <PromoCta
            href="#promo"
            aria-label="Plan the migration: Legacy color tokens retire this fall"
          >
            Plan the migration
          </PromoCta>
        </PromoBody>
      </Promo>

      <Promo tone="error">
        <PromoBody>
          <PromoKicker>Security</PromoKicker>
          <PromoMeta>
            <span>Advisory</span>
          </PromoMeta>
          <PromoTitle>Patch release 1.4.2 is out</PromoTitle>
          <PromoCta href="#promo" aria-label="Update now: Patch release 1.4.2 is out">
            Update now
          </PromoCta>
        </PromoBody>
      </Promo>

      {/* Neutral (no tone) text-only tile */}
      <Promo>
        <PromoBody>
          <PromoKicker>Podcast</PromoKicker>
          <PromoMeta>
            <span>Episode 12</span>
            <span>42 min</span>
          </PromoMeta>
          <PromoTitle>Designing the density switch</PromoTitle>
          <PromoCta
            href="#promo"
            aria-label="Listen now: Designing the density switch"
          >
            Listen now
          </PromoCta>
        </PromoBody>
      </Promo>
    </div>
  );
}
