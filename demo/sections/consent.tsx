import { Consent } from "../../src/components/Consent";
import { Button } from "../../src/components/Button";

export const meta = { id: "consent", title: "Consent" };

export default function ConsentSection() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Consent
        aria-label="Cookie consent"
        actions={
          <>
            <Button appearance="subtle-link">Manage preferences</Button>
            <Button>Reject all cookies</Button>
            <Button appearance="primary">Accept all cookies</Button>
          </>
        }
      >
        This site uses cookies to improve your browsing experience and perform
        analytics. To change your preferences, click Manage preferences.{" "}
        <a href="#">Cookies and Tracking Notice</a>
      </Consent>

      {/* consent-fixed pins bottom-center of the viewport; position is
          neutralized here so the gallery stays readable while the class is
          still exercised. Dismissal is equivalent to Reject, never consent. */}
      <Consent
        fixed
        aria-label="Cookie consent"
        style={{ position: "static", width: "auto" }}
        actions={
          <>
            <Button>Reject</Button>
            <Button appearance="primary">Accept</Button>
          </>
        }
        onDismiss={() => {}}
      >
        We use cookies to remember your theme and plan settings.{" "}
        <a href="#">Learn more</a>
      </Consent>
    </div>
  );
}
