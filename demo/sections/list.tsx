import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemLeading,
  ListItemLink,
  ListItemSubtitle,
  ListItemTitle,
  ListItemTrailing,
} from "../../src/components/List";
import { Lozenge } from "../../src/components/Lozenge";
import { Avatar } from "../../src/components/Avatar";

export const meta = { id: "list", title: "List" };

export default function ListSection() {
  return (
    <div className="d-flex gap-4" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* Static two-line rows: divided, leading avatars, trailing lozenges */}
      <List divided style={{ minWidth: 280 }}>
        <ListItem>
          <ListItemLeading>
            <Avatar size="md">JC</Avatar>
          </ListItemLeading>
          <ListItemContent>
            <ListItemTitle>Jetha Chan</ListItemTitle>
            <ListItemSubtitle>Product designer</ListItemSubtitle>
          </ListItemContent>
          <ListItemTrailing>
            <Lozenge status="success">Active</Lozenge>
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Avatar size="md">DK</Avatar>
          </ListItemLeading>
          <ListItemContent>
            <ListItemTitle>Dana Kim</ListItemTitle>
            <ListItemSubtitle>Engineering</ListItemSubtitle>
          </ListItemContent>
          <ListItemTrailing>
            <Lozenge status="default">Away</Lozenge>
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Avatar size="md">AR</Avatar>
          </ListItemLeading>
          <ListItemContent>
            <ListItemTitle>Alex Rivera with a very long name that truncates</ListItemTitle>
            <ListItemSubtitle>Quality engineering</ListItemSubtitle>
          </ListItemContent>
          <ListItemTrailing>
            <Lozenge status="inprogress">Reviewing</Lozenge>
          </ListItemTrailing>
        </ListItem>
      </List>

      {/* Compact interactive navigation rows: link, selected + aria-current, button */}
      <List compact style={{ minWidth: 220 }}>
        <li>
          <ListItemLink href="#list" selected aria-current="true">
            <ListItemContent>
              <ListItemTitle>Board</ListItemTitle>
            </ListItemContent>
          </ListItemLink>
        </li>
        <li>
          <ListItemLink href="#list">
            <ListItemContent>
              <ListItemTitle>Backlog</ListItemTitle>
            </ListItemContent>
          </ListItemLink>
        </li>
        <li>
          <ListItemButton>
            <ListItemContent>
              <ListItemTitle>Reports</ListItemTitle>
            </ListItemContent>
            <ListItemTrailing>›</ListItemTrailing>
          </ListItemButton>
        </li>
      </List>
    </div>
  );
}
