import { Tracker, TrackerStep } from "../../src/components/Tracker";

export const meta = { id: "tracker", title: "Tracker" };

export default function TrackerSection() {
  return (
    <Tracker aria-label="Create project">
      <TrackerStep marker="1" done>
        Project details
      </TrackerStep>
      <TrackerStep marker="2" done>
        Template
      </TrackerStep>
      <TrackerStep marker="3" current>
        Permissions
      </TrackerStep>
      <TrackerStep marker="4">Invite team</TrackerStep>
    </Tracker>
  );
}
