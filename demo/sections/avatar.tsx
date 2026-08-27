import { Avatar, AvatarGroup } from "../../src/components/Avatar";

export const meta = { id: "avatar", title: "Avatar" };

const photo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%236554C0'/%3E%3Ccircle cx='16' cy='12' r='6' fill='%23fff'/%3E%3Cellipse cx='16' cy='28' rx='10' ry='8' fill='%23fff'/%3E%3C/svg%3E";

export default function AvatarSection() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap" }}>
        <Avatar size="xs">A</Avatar>
        <Avatar size="sm">BD</Avatar>
        <Avatar size="md">JC</Avatar>
        <Avatar size="lg">MK</Avatar>
        <Avatar size="xl">RV</Avatar>
        <Avatar size="md" src={photo} alt="Dana K" />
      </div>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap", marginTop: 8 }}>
        <Avatar size="md" presence="online">ON</Avatar>
        <Avatar size="md" presence="busy">BU</Avatar>
        <Avatar size="md" presence="offline">OF</Avatar>
        <Avatar size="md" square>PR</Avatar>
        <Avatar size="lg" square src={photo} alt="Ops project" />
      </div>
      <div style={{ marginTop: 8 }}>
        <AvatarGroup label="Watchers: Alex, Bo, Cam and 4 others">
          <Avatar size="md">A</Avatar>
          <Avatar size="md">B</Avatar>
          <Avatar size="md">C</Avatar>
          <Avatar size="md">+4</Avatar>
        </AvatarGroup>
      </div>
    </>
  );
}
