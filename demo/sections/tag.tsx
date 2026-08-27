import { Tag } from "../../src/components/Tag";

export const meta = { id: "tag", title: "Tag" };

export default function TagSection() {
  return (
    <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
      <Tag>design</Tag>
      <Tag rounded>backend</Tag>
      <Tag href="#tag">frontend</Tag>
      <Tag removeLabel="Remove tooling">tooling</Tag>
      <Tag href="#tag" removeLabel="Remove infra">infra</Tag>
      <Tag rounded removeLabel="Remove a11y">a11y</Tag>
    </div>
  );
}
