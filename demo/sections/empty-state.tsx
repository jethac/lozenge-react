import { EmptyState } from "../../src/components/EmptyState";
import { Button } from "../../src/components/Button";

export const meta = { id: "empty-state", title: "Empty state" };

export default function EmptyStateSection() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <EmptyState
        glyph="∅"
        title="The backlog is empty"
        actions={
          <>
            <Button appearance="primary">Create issue</Button>
            <Button appearance="subtle">Import issues</Button>
          </>
        }
      >
        Create issues to plan your next sprint.
      </EmptyState>

      <EmptyState title="No results" headingLevel={4}>
        Try a different search term.
      </EmptyState>
    </div>
  );
}
