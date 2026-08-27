import { Backlog, BacklogItem, SprintHeader } from "../../src/components/Backlog";
import { Button } from "../../src/components/Button";

export const meta = { id: "planning", title: "Planning" };

export default function PlanningSection() {
  return (
    <>
      <SprintHeader
        name="Sprint 14"
        dates={"21 Jul – 1 Aug"}
        actions={
          <>
            <span className="badge" aria-label="14 story points">14</span>
            <Button compact>Complete sprint</Button>
          </>
        }
      />
      <Backlog>
        <BacklogItem
          type="story"
          issueKey="LOZ-31"
          points={3}
          status="inprogress"
          statusLabel="In progress"
          assignee="JC"
          assigneeLabel="Jetha Chan"
        >
          Theme panel: persist selected axes across reloads
        </BacklogItem>
        <BacklogItem
          type="bug"
          issueKey="LOZ-34"
          points={1}
          status="default"
          statusLabel="To do"
          assignee="DK"
          assigneeLabel="Dana K"
        >
          Login page throws redirect loop on expired session
        </BacklogItem>
        <BacklogItem type="task" issueKey="LOZ-36" points={2}>
          Wire contrast checker into CI
        </BacklogItem>
        <BacklogItem
          type="story"
          issueKey="LOZ-29"
          points={5}
          status="success"
          statusLabel="Done"
          assignee="AT"
          assigneeLabel="Aki Tanaka"
        >
          Dark mode token pass for settings screens
        </BacklogItem>
        <BacklogItem type="epic" issueKey="LOZ-21" points={3} assignee="JC">
          Navigation &amp; planning component set
        </BacklogItem>
      </Backlog>

      <div style={{ marginTop: 16 }}>
        <SprintHeader
          as="header"
          name="Backlog"
          headingLevel={4}
          actions={<Button compact>Start sprint</Button>}
        />
        <Backlog>
          {/* Status falls back to the raw status token when no label is given. */}
          <BacklogItem issueKey="LOZ-40" status="new">
            Author lz-* tags for the remaining planning templates
          </BacklogItem>
          <BacklogItem type="bug" issueKey="LOZ-41">
            Board column badge count drifts after drag and drop
          </BacklogItem>
        </Backlog>
      </div>
    </>
  );
}
