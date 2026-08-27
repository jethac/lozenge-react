import { FormGroup, FormLabel } from "../../src/components/Forms";
import { Listbox, ListboxOption, Select } from "../../src/components/Listbox";

export const meta = { id: "listbox", title: "Select & Listbox" };

export default function ListboxSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 320 }}>
      <FormGroup>
        <FormLabel htmlFor="listbox-status">Status</FormLabel>
        <Select id="listbox-status" defaultValue="In progress">
          <option>To do</option>
          <option>In progress</option>
          <option>Done</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="listbox-priority">Priority</FormLabel>
        <Select id="listbox-priority" invalid defaultValue="">
          <option value="" disabled>
            Choose a priority
          </option>
          <option>Highest</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </Select>
      </FormGroup>

      <Listbox label="Labels">
        <ListboxOption>accessibility</ListboxOption>
        <ListboxOption selected>design-system</ListboxOption>
        <ListboxOption>frontend</ListboxOption>
        <ListboxOption disabled>legacy</ListboxOption>
      </Listbox>
    </div>
  );
}
