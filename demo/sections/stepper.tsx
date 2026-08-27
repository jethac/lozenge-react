import { Stepper, StepperStep } from "../../src/components/Stepper";

export const meta = { id: "stepper", title: "Stepper" };

export default function StepperSection() {
  return (
    <div className="d-flex gap-4" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      {/* Class-controlled flavor: <ol> of <li>, app/server drives .expanded */}
      <Stepper style={{ minWidth: 260 }}>
        <StepperStep marker="1" title="Project details" done>
          <p>Name and key chosen.</p>
        </StepperStep>
        <StepperStep
          marker="2"
          title="Permissions"
          optional="Optional"
          current
          expanded
        >
          <p>Choose who can view this project.</p>
        </StepperStep>
        <StepperStep marker="3" title="Invite team" />
      </Stepper>

      {/* Zero-JS disclosure flavor: <div> of <details>, native toggling */}
      <Stepper as="div" style={{ minWidth: 260 }}>
        <StepperStep as="details" marker="1" title="Create account" done>
          <p>Done on sign-up.</p>
        </StepperStep>
        <StepperStep
          as="details"
          marker="2"
          title="Verify email"
          optional="Check your inbox"
          current
          expanded
        >
          <p>Click the link we sent you.</p>
        </StepperStep>
        <StepperStep as="details" marker="3" title="Set up workspace">
          <p>Pick a template to start from.</p>
        </StepperStep>
      </Stepper>
    </div>
  );
}
