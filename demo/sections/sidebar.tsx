import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  SidebarSubtitle,
  SidebarTitle,
} from "../../src/components/Sidebar";

export const meta = { id: "sidebar", title: "Sidebar" };

export default function SidebarSectionDemo() {
  return (
    <div
      style={{
        display: "flex",
        height: 420,
        border: "1px solid var(--lz-sys-border)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Sidebar>
        <SidebarHeader>
          <span className="avatar avatar-sm avatar-square">P</span>
          <div>
            <SidebarTitle>Phoenix</SidebarTitle>
            <SidebarSubtitle>Software project</SidebarSubtitle>
          </div>
        </SidebarHeader>

        {/* Collapsible sections: same name = zero-JS exclusive accordion. */}
        <SidebarGroup label="Planning" name="demo-sidebar" open>
          <SidebarItem href="#sidebar" active>
            Board
          </SidebarItem>
          <SidebarItem href="#sidebar">Backlog</SidebarItem>
          <SidebarItem href="#sidebar">Timeline</SidebarItem>
        </SidebarGroup>
        <SidebarGroup label="Development" name="demo-sidebar">
          <SidebarItem href="#sidebar">Code</SidebarItem>
          <SidebarItem href="#sidebar">Releases</SidebarItem>
        </SidebarGroup>

        {/* Plain (non-collapsible) section label. */}
        <SidebarSection>Shortcuts</SidebarSection>
        <nav aria-label="Shortcuts">
          <SidebarItem href="#sidebar">Project settings</SidebarItem>
          <SidebarItem href="#sidebar">Add shortcut</SidebarItem>
        </nav>
      </Sidebar>
      <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
        <h3>Board</h3>
        <p className="text-subtle">
          Content area. Groups share <code>name="demo-sidebar"</code>, so
          opening one collapses the other — native details/summary, zero JS.
        </p>
      </div>
    </div>
  );
}
