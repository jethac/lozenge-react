import { useState } from "react";
import { Sheet } from "../../src/components/Sheet";
import { Modal } from "../../src/components/Modal";
import { Button } from "../../src/components/Button";

export const meta = { id: "sheet", title: "Sheet" };

export default function SheetSection() {
  const [shareOpen, setShareOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [issueOpen, setIssueOpen] = useState(false);
  return (
    <>
      <div className="d-flex gap-2" style={{ flexWrap: "wrap" }}>
        <Button appearance="primary" onClick={() => setShareOpen(true)}>
          Open sheet
        </Button>
        <Button onClick={() => setFilterOpen(true)}>Open tall sheet</Button>
        <Button onClick={() => setIssueOpen(true)}>
          Open fullscreen dialog
        </Button>
      </div>

      <Sheet
        title="Share board"
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        footer={
          <Button appearance="subtle" type="submit" value="cancel">
            Cancel
          </Button>
        }
      >
        <p>Choose a destination — a person, a team, or a public link.</p>
      </Sheet>

      {/* Tall sheet, no visible title: labelled directly via aria-label. */}
      <Sheet
        tall
        aria-label="Filters"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <p>Filter controls — assignee, label, sprint, and status.</p>
      </Sheet>

      {/* The modal-fullscreen contract block: the existing Modal, fullscreen. */}
      <Modal
        size="fullscreen"
        title="New issue"
        open={issueOpen}
        onClose={() => setIssueOpen(false)}
        footer={
          <>
            <Button type="submit" value="cancel">
              Cancel
            </Button>
            <Button appearance="primary" type="submit" value="create">
              Create
            </Button>
          </>
        }
      >
        <p>Form fields for the mobile-scale creation flow live here.</p>
      </Modal>
    </>
  );
}
