import { Button } from "../../src/components/Button";
import { Lozenge } from "../../src/components/Lozenge";
import { Tooltip } from "../../src/components/Tooltip";

export const meta = { id: "tooltip", title: "Tooltip" };

export default function TooltipSection() {
  return (
    <div
      className="d-flex gap-2 align-items-center"
      style={{ flexWrap: "wrap", padding: "32px 48px" }}
    >
      <Tooltip content="Assign to me">
        <Button icon aria-label="Assign to me">
          @
        </Button>
      </Tooltip>
      <Tooltip content="Watch issue" position="bottom">
        <Button icon aria-label="Watch issue">
          👁
        </Button>
      </Tooltip>
      <Tooltip content="Share" position="left">
        <Button icon aria-label="Share">
          ↗
        </Button>
      </Tooltip>
      <Tooltip content="More actions" position="right">
        <Button icon aria-label="More actions">
          ⋯
        </Button>
      </Tooltip>
      <Tooltip content="Sprint 14 — ends Friday">
        <Lozenge status="inprogress">Sprint 14</Lozenge>
      </Tooltip>
    </div>
  );
}
