import type { CSSProperties } from "react";
import { Button } from "../../src/components/Button";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarNav,
  NavLink,
} from "../../src/components/Navbar";

export const meta = { id: "navbar", title: "Navbar" };

// The navbar is a sticky shell; the wrapper keeps it inside the gallery flow.
const frame: CSSProperties = {
  position: "relative",
  minHeight: 56,
  transform: "translate(0)",
  overflow: "hidden",
  borderRadius: 8,
  border: "1px solid var(--lz-sys-border)",
};

export default function NavbarSection() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={frame}>
        <Navbar aria-label="Main">
          <NavbarBrand href="#navbar">Lozenge</NavbarBrand>
          <NavbarNav>
            <li>
              <NavLink href="#navbar" active>
                Your work
              </NavLink>
            </li>
            <li>
              <NavLink href="#navbar">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#navbar">Filters</NavLink>
            </li>
          </NavbarNav>
          <NavbarActions>
            <Button appearance="primary">Create</Button>
            <span className="avatar avatar-md">JC</span>
          </NavbarActions>
        </Navbar>
      </div>

      <div style={frame}>
        <Navbar primary aria-label="Site">
          <NavbarBrand href="#navbar">Lozenge</NavbarBrand>
          <NavbarNav>
            <li>
              <NavLink href="#navbar" active>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="#navbar">Pricing</NavLink>
            </li>
          </NavbarNav>
          <NavbarActions>
            <Button appearance="primary" pill>
              Get started
            </Button>
          </NavbarActions>
        </Navbar>
      </div>
    </div>
  );
}
