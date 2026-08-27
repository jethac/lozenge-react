import { Chip, ChoiceChip, FilterChip } from "../../src/components/Chip";

export const meta = { id: "chips", title: "Chips" };

export default function ChipsSection() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
        <Chip>design</Chip>
        <Chip removeLabel="Remove frontend">frontend</Chip>
        <Chip removeLabel="Remove backend">backend</Chip>
      </div>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap", marginTop: 8 }}>
        <ChoiceChip name="demo-priority" value="low" defaultChecked>
          Low
        </ChoiceChip>
        <ChoiceChip name="demo-priority" value="medium">Medium</ChoiceChip>
        <ChoiceChip name="demo-priority" value="high">High</ChoiceChip>
        <ChoiceChip name="demo-priority" value="blocker" disabled>
          Blocker
        </ChoiceChip>
      </div>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap", marginTop: 8 }}>
        <FilterChip name="demo-type-bug" defaultChecked>Bug</FilterChip>
        <FilterChip name="demo-type-task">Task</FilterChip>
        <FilterChip name="demo-type-story">Story</FilterChip>
        <FilterChip name="demo-type-epic" disabled>Epic</FilterChip>
      </div>
    </>
  );
}
