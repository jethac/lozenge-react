import { useState } from "react";
import { Button } from "../../src/components/Button";
import { Snackbar, SnackbarAction } from "../../src/components/Snackbar";

export const meta = { id: "snackbar", title: "Snackbar" };

export default function SnackbarSection() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <div className="d-flex gap-2" style={{ flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }}>
        <Snackbar
          action={<SnackbarAction onClick={() => {}}>Undo</SnackbarAction>}
        >
          Issue LOZ-42 moved to Done.
        </Snackbar>
        <Snackbar role="alert">Connection lost. Retrying…</Snackbar>
      </div>
      {/* .snackbar-fixed pins bottom-center of the viewport; the transformed
          wrapper makes this demo instance position against the box instead. */}
      <div style={{ marginTop: 8 }}>
        <Button onClick={() => setShown(true)}>Show fixed snackbar</Button>
      </div>
      <div
        style={{
          position: "relative",
          transform: "translateZ(0)",
          height: 88,
          marginTop: 8,
          overflow: "hidden",
          border: "1px dashed var(--lz-sys-separator)",
          borderRadius: 3,
        }}
      >
        {shown && (
          <Snackbar
            fixed
            action={
              <SnackbarAction onClick={() => setShown(false)}>
                Dismiss
              </SnackbarAction>
            }
          >
            Connection restored.
          </Snackbar>
        )}
      </div>
    </>
  );
}
