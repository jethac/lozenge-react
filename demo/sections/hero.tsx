import {
  Hero,
  HeroAccent,
  HeroActions,
  HeroLede,
  HeroTitle,
} from "../../src/components/Hero";
import { LinkButton } from "../../src/components/Button";

export const meta = { id: "hero", title: "Hero" };

export default function HeroSection() {
  return (
    <>
      {/* Grid backdrop, accent run, CTA row */}
      <Hero grid>
        <HeroTitle>
          Ship the sprint, <HeroAccent>skip the ceremony</HeroAccent>
        </HeroTitle>
        <HeroLede>
          Lozenge turns platform primitives into a whole workflow surface —
          boards, backlogs, and flags with zero JavaScript.
        </HeroLede>
        <HeroActions>
          <LinkButton appearance="primary" pill href="#hero">
            Get started
          </LinkButton>
          <LinkButton appearance="subtle-link" href="#hero">
            Read the docs
          </LinkButton>
        </HeroActions>
      </Hero>

      {/* Plain hero: title + lede only */}
      <Hero as="div">
        <HeroTitle as="h2">Docs that lint themselves</HeroTitle>
        <HeroLede>
          Every example on this site is generated from a machine-checked spec.
        </HeroLede>
      </Hero>
    </>
  );
}
