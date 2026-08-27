import { Ring } from "../../src/components/Ring";

export const meta = { id: "ring", title: "Ring" };

export default function RingSection() {
  return (
    <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
      <Ring value={0.6} label="60%" aria-label="Sprint completion" />
      <Ring value={0.25} size="sm" aria-label="Upload progress" />
      <Ring value={1} size="lg" status="success" label="100%" aria-label="Import complete" />
      <Ring value={0.15} size="lg" status="danger" label="15%" aria-label="Error budget remaining" />
    </div>
  );
}
