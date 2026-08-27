import {
  Timeline,
  TimelineBar,
  TimelineHeader,
  TimelineLabel,
  TimelineRow,
} from "../../src/components/Timeline";
import { Lozenge } from "../../src/components/Lozenge";

export const meta = { id: "timeline", title: "Timeline" };

export default function TimelineSection() {
  return (
    <Timeline cols={12}>
      <TimelineHeader>
        <div>Epics</div>
        <div style={{ gridColumn: "span 4" }}>April</div>
        <div style={{ gridColumn: "span 4" }}>May</div>
        <div style={{ gridColumn: "span 4" }}>June</div>
      </TimelineHeader>
      <TimelineRow>
        <TimelineLabel>
          <span className="issue-type issue-type-epic" role="img" aria-label="Epic" />{" "}
          Runtime theme axes <Lozenge status="success">Done</Lozenge>
        </TimelineLabel>
        <TimelineBar variant="done" start={1} span={4} title="April" />
      </TimelineRow>
      <TimelineRow>
        <TimelineLabel>
          <span className="issue-type issue-type-epic" role="img" aria-label="Epic" />{" "}
          Component contract lint <Lozenge status="inprogress">In progress</Lozenge>
        </TimelineLabel>
        <TimelineBar start={3} span={6} title="Mid-April to May" />
      </TimelineRow>
      <TimelineRow>
        <TimelineLabel>
          <span className="issue-type issue-type-epic" role="img" aria-label="Epic" />{" "}
          Docs relaunch <Lozenge status="moved">At risk</Lozenge>
        </TimelineLabel>
        <TimelineBar variant="risk" start={7} span={6} title="Mid-May to June" />
      </TimelineRow>
      <TimelineRow>
        <TimelineLabel>
          <span className="issue-type issue-type-epic" role="img" aria-label="Epic" />{" "}
          React bindings <Lozenge status="default">Unscheduled</Lozenge>
        </TimelineLabel>
      </TimelineRow>
    </Timeline>
  );
}
