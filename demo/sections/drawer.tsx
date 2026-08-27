import { useState } from "react";
import { Drawer } from "../../src/components/Drawer";
import { Button } from "../../src/components/Button";

export const meta = { id: "drawer", title: "Drawer" };

export default function DrawerSection() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <>
      <div className="d-flex gap-2" style={{ flexWrap: "wrap" }}>
        <Button appearance="primary" onClick={() => setDetailOpen(true)}>
          Open drawer
        </Button>
        <Button onClick={() => setFiltersOpen(true)}>
          Open start + wide drawer
        </Button>
      </div>

      <Drawer
        title="Issue details"
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        footer={
          <>
            <Button appearance="subtle" type="submit" value="cancel">
              Cancel
            </Button>
            <Button appearance="primary" type="submit" value="save">
              Save
            </Button>
          </>
        }
      >
        <p>LOZ-14 — Login page throws a redirect loop on expired session.</p>
      </Drawer>

      {/* Start-edge, wide drawer with no visible title: aria-label instead. */}
      <Drawer
        start
        wide
        aria-label="Filters"
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      >
        <p>Filter controls — assignee, label, sprint, and status.</p>
      </Drawer>
    </>
  );
}
