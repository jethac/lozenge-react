import { Button } from "../../src/components/Button";
import { Rail, RailBottom, RailFab, RailItem } from "../../src/components/Rail";

export const meta = { id: "rail", title: "Rail" };

const boardIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z" fill="currentColor" />
  </svg>
);
const backlogIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 5h14M3 10h14M3 15h9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const timelineIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 4h9v3H3zM6 8.5h11v3H6zM4 13h8v3H4z" fill="currentColor" />
  </svg>
);
const searchIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="9" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const settingsIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="3" fill="currentColor" />
    <path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function RailSection() {
  return (
    <div
      style={{
        display: "flex",
        height: 360,
        border: "1px solid var(--lz-sys-border)",
        borderRadius: 8,
        overflow: "hidden",
        position: "relative",
        transform: "translate(0)",
      }}
    >
      <Rail aria-label="Primary">
        <RailFab>
          <Button appearance="primary" icon aria-label="Create">
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
              <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
        </RailFab>
        <RailItem href="#rail" icon={boardIcon} label="Board" active />
        <RailItem href="#rail" icon={backlogIcon} label="Backlog" />
        <RailItem href="#rail" icon={timelineIcon} label="Timeline" />
        {/* Icon-only destination: the name moves to aria-label. */}
        <RailItem href="#rail" icon={searchIcon} aria-label="Search" />
        <RailBottom>
          <RailItem href="#rail" icon={settingsIcon} label="Settings" />
        </RailBottom>
      </Rail>
      <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
        <h3>Board</h3>
        <p className="text-subtle">
          The rail is the compact form of the sidebar — swap between them at a
          breakpoint rather than showing both. Primary action up top,
          destinations stacked, <code>.rail-bottom</code> pushed to the end.
        </p>
      </div>
    </div>
  );
}
