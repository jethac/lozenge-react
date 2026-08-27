import type { CSSProperties } from "react";
import { BottomNav, BottomNavItem } from "../../src/components/BottomNav";

export const meta = { id: "bottom-nav", title: "Bottom nav" };

const homeIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 9l7-6 7 6v8h-5v-5H8v5H3z" fill="currentColor" />
  </svg>
);
const searchIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="9" cy="9" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const alertsIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 2a5 5 0 0 0-5 5v3.5L3 14h14l-2-3.5V7a5 5 0 0 0-5-5z" fill="currentColor" />
    <path d="M8 16a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const profileIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="6.5" r="3.5" fill="currentColor" />
    <path d="M3.5 17.5a6.5 6.5 0 0 1 13 0z" fill="currentColor" />
  </svg>
);

// Phone frame; transform: translate(0) makes it the containing block for the
// fixed variant, so .bottom-nav-fixed pins to the frame, not the viewport.
const phone: CSSProperties = {
  position: "relative",
  width: 390,
  maxWidth: "100%",
  height: 280,
  display: "flex",
  flexDirection: "column",
  border: "1px solid var(--lz-sys-border)",
  borderRadius: 12,
  overflow: "hidden",
  transform: "translate(0)",
};

export default function BottomNavSection() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      <div style={phone}>
        <div style={{ flex: 1, padding: 16, overflow: "auto" }}>
          <h3>Inbox</h3>
          <p className="text-subtle">
            Static bar in flow. The active destination gets a pill indicator
            behind its icon; the others take a hover wash.
          </p>
        </div>
        <BottomNav aria-label="Primary">
          <BottomNavItem href="#bottom-nav" icon={homeIcon} label="Home" active />
          <BottomNavItem href="#bottom-nav" icon={searchIcon} label="Search" />
          <BottomNavItem href="#bottom-nav" icon={alertsIcon} label="Alerts" />
          {/* Icon-only destination: the name moves to aria-label. */}
          <BottomNavItem href="#bottom-nav" icon={profileIcon} aria-label="Profile" />
        </BottomNav>
      </div>

      <div style={phone}>
        <div style={{ flex: 1, padding: 16, overflow: "auto", paddingBottom: 72 }}>
          <h3>Fixed</h3>
          <p className="text-subtle">
            <code>.bottom-nav-fixed</code> pins the bar to the viewport edge
            (here, the frame). Give scrolling content enough bottom padding
            that nothing hides behind it.
          </p>
        </div>
        <BottomNav fixed aria-label="Pinned">
          <BottomNavItem href="#bottom-nav" icon={homeIcon} label="Home" />
          <BottomNavItem href="#bottom-nav" icon={searchIcon} label="Search" active />
          <BottomNavItem href="#bottom-nav" icon={profileIcon} label="Profile" />
        </BottomNav>
      </div>
    </div>
  );
}
