import { useState } from "react";
import { Message, Banner, Flag } from "../../src/components/Message";
import { IssueType } from "../../src/components/Card";

export const meta = { id: "message", title: "Message" };

export default function MessageSection() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <>
      <div style={{ display: "grid", gap: 8, maxWidth: 560 }}>
        <Message title="Heads up">
          A default message with no tone class.
        </Message>
        <Message tone="info" title="Editor updated">
          <p>The description editor now supports tables.</p>
        </Message>
        <Message
          tone="warning"
          title="Trial ending"
          actions={<a href="#">Upgrade</a>}
        >
          <p>Your trial expires in 3 days.</p>
        </Message>
        <Message tone="error" title="Error: sync failed" role="alert">
          <p>Changes could not be saved. Check your connection.</p>
        </Message>
        <Message tone="success" title="Import complete">
          <p>128 issues imported into the backlog.</p>
        </Message>
        <Message
          tone="discovery"
          title="New: timeline view"
          actions={<a href="#">Try it</a>}
        >
          <p>Plan work across sprints on the new timeline.</p>
        </Message>
      </div>

      <div style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <Banner>Scheduled maintenance on Saturday 02:00–04:00 UTC.</Banner>
        <Banner tone="warning">
          Read-only mode — changes are paused during the migration.
        </Banner>
        <Banner tone="error" role="alert">
          Something's gone wrong — retrying…
        </Banner>
        <Banner tone="inverse">
          Lozenge Summit 2026 — tickets are live. <a href="#">Register now</a>
        </Banner>
      </div>

      <div className="d-flex gap-2" style={{ flexWrap: "wrap", alignItems: "flex-start", marginTop: 16 }}>
        <Flag
          role="status"
          title="Issue created"
          icon={<IssueType type="story" label="Story" />}
          actions={<a href="#">View issue</a>}
          onDismiss={() => {}}
        >
          LOZ-42 added to the backlog.
        </Flag>
        {!dismissed && (
          <Flag
            tone="success"
            role="status"
            title="Changes saved"
            onDismiss={() => setDismissed(true)}
          />
        )}
        <Flag tone="info" role="status" title="Board updated" />
        <Flag tone="warning" role="status" title="Connection unstable" />
        <Flag tone="error" role="alert" title="Save failed" onDismiss={() => {}}>
          Your changes could not be saved.
        </Flag>
        <Flag tone="discovery" role="status" title="Try the new timeline" />
        {/* flag-fixed pins to the viewport; position is neutralized here so the
            gallery stays readable while the class is still exercised. */}
        <Flag
          fixed
          role="status"
          title="Fixed-position toast"
          style={{ position: "static" }}
        >
          Pinned bottom-left when left to its own devices.
        </Flag>
      </div>
    </>
  );
}
