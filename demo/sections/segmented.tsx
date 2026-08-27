import { useState } from "react";
import { Segmented, SegmentedOption } from "../../src/components/Segmented";

export const meta = { id: "segmented", title: "Segmented" };

export default function SegmentedSection() {
  const [density, setDensity] = useState("cozy");
  return (
    <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
      <Segmented label="View" defaultValue="board">
        <SegmentedOption value="board">Board</SegmentedOption>
        <SegmentedOption value="list">List</SegmentedOption>
        <SegmentedOption value="timeline">Timeline</SegmentedOption>
      </Segmented>
      <Segmented label="Group by" bold defaultValue="assignee">
        <SegmentedOption value="assignee">Assignee</SegmentedOption>
        <SegmentedOption value="epic">Epic</SegmentedOption>
        <SegmentedOption value="none" disabled>None</SegmentedOption>
      </Segmented>
      {/* Controlled convenience on top of the native radio group */}
      <Segmented
        label="Density"
        bold
        compact
        value={density}
        onValueChange={setDensity}
      >
        <SegmentedOption value="cozy">Cozy</SegmentedOption>
        <SegmentedOption value="compact">Compact</SegmentedOption>
      </Segmented>
    </div>
  );
}
