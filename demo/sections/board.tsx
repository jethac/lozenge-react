import {
  Board,
  BoardColumn,
  BoardColumnCards,
  BoardColumnHeader,
} from "../../src/components/Board";
import { IssueCard } from "../../src/components/Card";
import { Lozenge } from "../../src/components/Lozenge";

export const meta = { id: "board", title: "Board" };

export default function BoardSection() {
  return (
    <Board>
      <BoardColumn>
        <BoardColumnHeader count={2}>To do</BoardColumnHeader>
        <BoardColumnCards>
          <IssueCard
            type="bug"
            issueKey="LOZ-34"
            meta={
              <>
                <span className="badge" aria-label="1 story points">1</span>
                <span className="avatar avatar-sm">DK</span>
              </>
            }
          >
            Login page throws redirect loop on expired session
          </IssueCard>
          <IssueCard
            type="task"
            issueKey="LOZ-36"
            meta={<span className="badge" aria-label="2 story points">2</span>}
          >
            Wire contrast checker into CI
          </IssueCard>
        </BoardColumnCards>
      </BoardColumn>
      <BoardColumn>
        <BoardColumnHeader count={2}>In progress</BoardColumnHeader>
        <BoardColumnCards>
          <IssueCard
            type="story"
            issueKey="LOZ-31"
            meta={
              <>
                <Lozenge status="inprogress">In progress</Lozenge>
                <span className="avatar avatar-sm">JC</span>
              </>
            }
          >
            Theme panel: persist selected axes across reloads
          </IssueCard>
          <IssueCard
            type="epic"
            issueKey="LOZ-21"
            meta={
              <>
                <span className="badge" aria-label="3 story points">3</span>
                <span className="avatar avatar-sm">JC</span>
              </>
            }
          >
            Navigation &amp; planning component set
          </IssueCard>
        </BoardColumnCards>
      </BoardColumn>
      <BoardColumn>
        <BoardColumnHeader count={1}>Done</BoardColumnHeader>
        <BoardColumnCards>
          <IssueCard
            type="story"
            issueKey="LOZ-29"
            meta={
              <>
                <Lozenge status="success">Done</Lozenge>
                <span className="avatar avatar-sm">AT</span>
              </>
            }
          >
            Dark mode token pass for settings screens
          </IssueCard>
        </BoardColumnCards>
      </BoardColumn>
      <BoardColumn>
        {/* Empty column: the cards well keeps a min-height so it stays a drop target. */}
        <BoardColumnHeader count={0}>Blocked</BoardColumnHeader>
        <BoardColumnCards />
      </BoardColumn>
    </Board>
  );
}
