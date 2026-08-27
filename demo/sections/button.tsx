import { Button, ButtonGroup, LinkButton } from "../../src";

export const meta = { id: "button", title: "Button" };

export default function ButtonSection() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
        <Button appearance="primary">Create</Button>
        <Button>Default</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="warning">Warning</Button>
        <Button appearance="danger">Delete</Button>
        <Button appearance="link">Link</Button>
        <Button disabled>Disabled</Button>
        <Button icon aria-label="Settings">⚙</Button>
        <Button compact>Compact</Button>
        <Button pill>Pill</Button>
        <LinkButton href="#button">Navigate</LinkButton>
      </div>
      <div style={{ marginTop: 8 }}>
        <ButtonGroup label="Zoom range">
          <Button>Days</Button>
          <Button active>Weeks</Button>
          <Button>Months</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
