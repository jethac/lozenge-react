import { Lozenge } from "../../src";

export const meta = { id: "lozenge", title: "Lozenge" };

export default function LozengeSection() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
        <Lozenge status="default">To do</Lozenge>
        <Lozenge status="inprogress">In progress</Lozenge>
        <Lozenge status="moved">Moved</Lozenge>
        <Lozenge status="new">New</Lozenge>
        <Lozenge status="removed">Removed</Lozenge>
        <Lozenge status="success">Done</Lozenge>
      </div>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap", marginTop: 8 }}>
        <Lozenge status="default" bold>To do</Lozenge>
        <Lozenge status="inprogress" bold>In progress</Lozenge>
        <Lozenge status="success" bold>Done</Lozenge>
      </div>
    </>
  );
}
