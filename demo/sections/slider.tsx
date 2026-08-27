import type { CSSProperties } from "react";
import { RangeSlider, Slider } from "../../src/components/Slider";

export const meta = { id: "slider", title: "Slider" };

export default function SliderSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 360 }}>
      <Slider min={0} max={100} defaultValue={60} aria-label="Estimate" />
      <Slider
        compact
        min={0}
        max={10}
        defaultValue={3}
        aria-label="Story points"
      />
      <Slider
        thin
        min={0}
        max={100}
        defaultValue={40}
        aria-label="Progress"
        style={{ "--value": 0.4 } as CSSProperties}
      />
      <Slider
        min={0}
        max={100}
        defaultValue={50}
        aria-label="Capacity"
        disabled
      />
      <RangeSlider>
        <Slider min={0} max={100} defaultValue={20} aria-label="Minimum" />
        <Slider min={0} max={100} defaultValue={60} aria-label="Maximum" />
      </RangeSlider>
    </div>
  );
}
