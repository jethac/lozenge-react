import { Skeleton, SkeletonParagraph } from "../../src/components/Skeleton";

export const meta = { id: "skeleton", title: "Skeleton" };

export default function SkeletonSection() {
  return (
    <div aria-busy="true">
      <div style={{ maxWidth: 360 }}>
        <Skeleton shape="heading" />
        <div style={{ marginTop: 8 }}>
          <SkeletonParagraph lines={3} />
        </div>
      </div>
      <div className="d-flex gap-2 align-items-center" style={{ flexWrap: "wrap", marginTop: 8 }}>
        <Skeleton shape="avatar" avatarSize="xs" />
        <Skeleton shape="avatar" avatarSize="sm" />
        <Skeleton shape="avatar" avatarSize="md" />
        <Skeleton shape="avatar" avatarSize="lg" />
        <Skeleton shape="avatar" avatarSize="xl" />
      </div>
      <div style={{ marginTop: 8, maxWidth: 360 }}>
        <Skeleton shape="text" />
      </div>
      <div style={{ marginTop: 8, maxWidth: 360 }}>
        <Skeleton shape="card" />
      </div>
    </div>
  );
}
