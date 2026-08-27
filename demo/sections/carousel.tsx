import { Carousel, CarouselItem } from "../../src/components/Carousel";

export const meta = { id: "carousel", title: "Carousel" };

export default function CarouselSection() {
  return (
    <>
      {/* Default strip: start-snapping cards, one wide */}
      <Carousel label="Recent boards">
        <CarouselItem caption="Sprint 14" />
        <CarouselItem wide caption="Roadmap" />
        <CarouselItem caption="Bug triage" />
        <CarouselItem caption="Design tokens" />
        <CarouselItem wide caption="Release readiness" />
        <CarouselItem caption="Retro actions" />
      </Carousel>

      {/* Hero strip: center-snapping single feature */}
      <Carousel hero label="Featured updates" style={{ marginTop: 16 }}>
        <CarouselItem caption="Theme axes graduate from the lab" />
        <CarouselItem caption="Contract lint lands in CI" />
        <CarouselItem caption="Zero-JS modals everywhere" />
      </Carousel>
    </>
  );
}
