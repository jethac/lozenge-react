import { Button } from "../../src/components/Button";
import {
  MegaMenu,
  MegaMenuGroup,
  MegaMenuHeading,
  MegaMenuItem,
  MegaMenuTrigger,
} from "../../src/components/MegaMenu";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarNav,
  NavLink,
} from "../../src/components/Navbar";

export const meta = { id: "mega-menu", title: "Mega menu" };

export default function MegaMenuSection() {
  return (
    <>
      <p className="text-subtle">
        The marketing-nav pattern: a navbar item opens a wide glass panel of
        grouped destinations — popover + implicit anchor, zero JS. The panel
        lives outside the glass navbar as its sibling (glass never nests).
        Click Products to open it.
      </p>
      <div
        style={{
          position: "relative",
          minHeight: 56,
          transform: "none",
          overflow: "visible",
        }}
      >
        <Navbar aria-label="Site">
          <NavbarBrand href="#mega-menu">Lozenge</NavbarBrand>
          <NavbarNav>
            <li>
              <MegaMenuTrigger menuId="demo-mm-products">
                Products
              </MegaMenuTrigger>
            </li>
            <li>
              <NavLink href="#mega-menu">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="#mega-menu">Docs</NavLink>
            </li>
          </NavbarNav>
          <NavbarActions>
            <Button appearance="primary" pill>
              Get started
            </Button>
          </NavbarActions>
        </Navbar>
        <MegaMenu id="demo-mm-products" label="Products">
          <MegaMenuGroup>
            <MegaMenuHeading>Plan and track</MegaMenuHeading>
            <MegaMenuItem
              href="#mega-menu"
              description="Kanban for the zero-JS era"
            >
              Board
            </MegaMenuItem>
            <MegaMenuItem
              href="#mega-menu"
              description="Sprint planning with story points"
            >
              Backlog
            </MegaMenuItem>
          </MegaMenuGroup>
          <MegaMenuGroup>
            <MegaMenuHeading>Report</MegaMenuHeading>
            <MegaMenuItem
              href="#mega-menu"
              description="Gantt-lite across epics"
            >
              Timeline
            </MegaMenuItem>
            <MegaMenuItem
              href="#mega-menu"
              description="Milestones and check-ins"
            >
              Tracker
            </MegaMenuItem>
          </MegaMenuGroup>
          <MegaMenuGroup>
            <MegaMenuHeading>Platform</MegaMenuHeading>
            <MegaMenuItem
              href="#mega-menu"
              description="Four runtime theme axes"
            >
              Tokens
            </MegaMenuItem>
            {/* Description is optional. */}
            <MegaMenuItem href="#mega-menu">Docs</MegaMenuItem>
          </MegaMenuGroup>
        </MegaMenu>
      </div>
    </>
  );
}
