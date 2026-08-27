import {
  DropdownMenu,
  DropdownItem,
  DropdownLinkItem,
  DropdownHeading,
  DropdownDivider,
} from "../../src/components/Dropdown";
import { Button } from "../../src/components/Button";

export const meta = { id: "dropdown", title: "Dropdown" };

export default function DropdownSection() {
  return (
    <div className="d-flex gap-2" style={{ flexWrap: "wrap" }}>
      <Button popoverTarget="dropdown-demo-actions">Actions</Button>
      <DropdownMenu id="dropdown-demo-actions">
        <DropdownHeading>Move to</DropdownHeading>
        <DropdownItem
          popoverTarget="dropdown-demo-actions"
          popoverTargetAction="hide"
        >
          To do
        </DropdownItem>
        <DropdownItem
          selected
          popoverTarget="dropdown-demo-actions"
          popoverTargetAction="hide"
        >
          In progress
        </DropdownItem>
        <DropdownItem
          popoverTarget="dropdown-demo-actions"
          popoverTargetAction="hide"
        >
          Done
        </DropdownItem>
        <DropdownDivider />
        <DropdownLinkItem danger href="#">
          Delete
        </DropdownLinkItem>
      </DropdownMenu>

      <Button popoverTarget="dropdown-demo-profile">Profile ▾</Button>
      <DropdownMenu id="dropdown-demo-profile" end>
        <DropdownLinkItem href="#" description="Signed in as jetha">
          Account
        </DropdownLinkItem>
        <DropdownLinkItem href="#">Settings</DropdownLinkItem>
        <DropdownDivider />
        <DropdownItem
          popoverTarget="dropdown-demo-profile"
          popoverTargetAction="hide"
        >
          Log out
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
}
