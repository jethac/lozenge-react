import { Badge } from "../../src/components/Badge";

export const meta = { id: "badge", title: "Badge" };

export default function BadgeSection() {
  return (
    <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
      <Badge aria-label="25 issues">25</Badge>
      <Badge tone="primary" aria-label="4 notifications">4</Badge>
      <Badge tone="important" aria-label="8 overdue">8</Badge>
      <Badge tone="added" aria-label="12 lines added">+12</Badge>
      <Badge tone="removed" aria-label="3 lines removed">−3</Badge>
      <span>
        Comments <Badge>3</Badge>
      </span>
    </div>
  );
}
