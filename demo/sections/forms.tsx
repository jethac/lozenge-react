import {
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  FormTextArea,
  InvalidFeedback,
  Toggle,
} from "../../src/components/Forms";

export const meta = { id: "forms", title: "Forms" };

export default function FormsSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 480 }}>
      <FormGroup>
        <FormLabel htmlFor="forms-summary" required>
          Summary
        </FormLabel>
        <FormControl
          id="forms-summary"
          placeholder="What needs doing?"
          required
        />
        <FormText>Keep it short.</FormText>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="forms-desc">Description</FormLabel>
        <FormTextArea id="forms-desc" placeholder="Add more detail…" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="forms-epic">Epic name</FormLabel>
        <FormControl
          id="forms-epic"
          invalid
          defaultValue="!!"
          aria-describedby="forms-epic-error"
        />
        <InvalidFeedback id="forms-epic-error">
          Epic names must be at least three characters.
        </InvalidFeedback>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="forms-sprint">Sprint (compact)</FormLabel>
        <FormControl id="forms-sprint" compact defaultValue="Sprint 42" />
      </FormGroup>

      <FormGroup>
        <FormControl
          subtle
          defaultValue="Subtle until hovered"
          aria-label="Page title"
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="forms-type">Issue type</FormLabel>
        <FormSelect id="forms-type" defaultValue="Bug">
          <option>Story</option>
          <option>Bug</option>
          <option>Task</option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormCheck id="forms-watch" label="Notify watchers" defaultChecked />
        <FormCheck id="forms-flag" label="Flag as blocked" />
        <FormCheck
          id="forms-legacy"
          label="Sync to legacy tracker"
          disabled
        />
      </FormGroup>

      <FormGroup as="fieldset">
        <FormCheck
          type="radio"
          name="forms-assign"
          id="forms-assign-me"
          label="Assign to me"
          defaultChecked
        />
        <FormCheck
          type="radio"
          name="forms-assign"
          id="forms-assign-none"
          label="Leave unassigned"
        />
      </FormGroup>

      <FormGroup>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Toggle aria-label="Send me updates" defaultChecked />
          <Toggle lg aria-label="Enable notifications" />
          <Toggle aria-label="Beta features" disabled />
        </div>
      </FormGroup>
    </div>
  );
}
