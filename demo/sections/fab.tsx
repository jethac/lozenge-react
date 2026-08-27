import { Fab } from "../../src/components/Fab";

export const meta = { id: "fab", title: "FAB" };

export default function FabSection() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
        <Fab aria-label="Create issue">+</Fab>
        <Fab small aria-label="Add comment">+</Fab>
        <Fab extended>+ Create</Fab>
        <Fab extended small>+ Create</Fab>
        <Fab disabled aria-label="Create issue">+</Fab>
      </div>
      {/* .fab-fixed pins against the viewport; the transformed wrapper makes
          this demo instance position against the box instead. */}
      <div
        style={{
          position: "relative",
          transform: "translateZ(0)",
          height: 96,
          marginTop: 8,
          overflow: "hidden",
          border: "1px dashed var(--lz-sys-separator)",
          borderRadius: 3,
        }}
      >
        <Fab fixed aria-label="Create issue">+</Fab>
      </div>
    </>
  );
}
