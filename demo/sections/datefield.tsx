import { DateField, DateRange } from "../../src/components/DateField";
import {
  FormGroup,
  FormLabel,
  InvalidFeedback,
} from "../../src/components/Forms";

export const meta = { id: "datefield", title: "Date field" };

export default function DateFieldSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 480 }}>
      <FormGroup>
        <FormLabel htmlFor="datefield-due">Due date</FormLabel>
        <DateField id="datefield-due" defaultValue="2026-08-14" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="datefield-start">Start date (compact)</FormLabel>
        <DateField id="datefield-start" compact defaultValue="2026-08-03" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="datefield-release">Release date</FormLabel>
        <DateField
          id="datefield-release"
          invalid
          defaultValue="2020-01-01"
          aria-describedby="datefield-release-error"
        />
        <InvalidFeedback id="datefield-release-error">
          Release date must be in the future.
        </InvalidFeedback>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="datefield-range-start">Sprint window</FormLabel>
        <DateRange label="Sprint window">
          <DateField
            id="datefield-range-start"
            defaultValue="2026-08-03"
            aria-label="Start date"
          />
          <DateField
            defaultValue="2026-08-17"
            min="2026-08-03"
            aria-label="End date"
          />
        </DateRange>
      </FormGroup>
    </div>
  );
}
