import { Card, CardHeader, CardBody, CardFooter, IssueCard, IssueType } from "../../src/components/Card";
import { Lozenge } from "../../src/components/Lozenge";
import { Button } from "../../src/components/Button";

export const meta = { id: "card", title: "Card" };

export default function CardSection() {
  return (
    <>
      <div className="d-flex gap-2" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
        <Card style={{ minWidth: 260 }}>
          <CardHeader>
            <h5 style={{ margin: 0 }}>Sprint 14</h5>
          </CardHeader>
          <CardBody>
            Eight issues remaining; the burndown is tracking two days ahead of
            schedule.
          </CardBody>
          <CardFooter>
            <Button appearance="subtle" compact>
              View report
            </Button>
          </CardFooter>
        </Card>
        <Card style={{ minWidth: 260 }}>
          <CardBody>A body-only card for simple grouped content.</CardBody>
        </Card>
      </div>

      {/* Issue cards — independent roots, never nested inside a .card. */}
      <div style={{ maxWidth: 280, marginTop: 16 }}>
        <IssueCard
          type="bug"
          issueKey="PROJ-42"
          meta={
            <>
              <span className="badge">3</span>
              <span className="avatar avatar-sm">JC</span>
            </>
          }
        >
          Fix login redirect loop
        </IssueCard>
        <IssueCard
          type="story"
          issueKey="LOZ-7"
          meta={
            <>
              <Lozenge status="inprogress">In progress</Lozenge>
              <span className="avatar avatar-sm">AM</span>
            </>
          }
        >
          Board column drag-and-drop keyboard support
        </IssueCard>
        <IssueCard>A bare issue card with only a summary</IssueCard>
      </div>

      <div className="d-flex gap-2 align-items-center" style={{ marginTop: 16 }}>
        <IssueType type="story" label="Story" />
        <IssueType type="bug" label="Bug" />
        <IssueType type="task" label="Task" />
        <IssueType type="epic" label="Epic" />
        <span>
          <IssueType type="task" /> Decorative next to visible text: Task
        </span>
      </div>
    </>
  );
}
