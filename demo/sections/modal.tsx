import { useState } from "react";
import { Button, Modal } from "../../src";

export const meta = { id: "modal", title: "Modal" };

export default function ModalSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        title="Move issue"
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button>Cancel</Button>
            <Button appearance="primary">Move</Button>
          </>
        }
      >
        <p>
          Select the destination project for <strong>PROJ-42</strong>. Sprint
          and board assignments will be cleared.
        </p>
      </Modal>
    </>
  );
}
