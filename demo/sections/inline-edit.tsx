import { InlineEdit } from "../../src/components/InlineEdit";

export const meta = { id: "inline-edit", title: "Inline edit" };

export default function InlineEditSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 480 }}>
      <InlineEdit
        action="#"
        toggleId="inline-edit-summary"
        label="Edit summary"
        inputLabel="Summary"
        name="summary"
        value="Fix redirect loop on expired session"
      />
      <InlineEdit
        action="#"
        toggleId="inline-edit-desc"
        label="Edit description"
        inputLabel="Description"
        name="description"
        multiline
        value="Users bounce between /login and /dashboard when the session cookie has expired."
      />
    </div>
  );
}
