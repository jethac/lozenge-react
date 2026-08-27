import {
  Comment,
  CommentEditor,
  CommentThread,
} from "../../src/components/Comments";
import { Avatar } from "../../src/components/Avatar";

export const meta = { id: "comments", title: "Comments" };

export default function CommentsSection() {
  return (
    <CommentThread style={{ maxWidth: 640 }}>
      <Comment
        avatar={<Avatar size="md">DK</Avatar>}
        author="Dana Kim"
        time={<time dateTime="2026-08-28T09:00">2 hours ago</time>}
        actions={
          <>
            <a href="#comments">Reply</a>
            <a href="#comments">Edit</a>
          </>
        }
      >
        <p>
          Confirmed on staging — the accent-hue dial now survives a full page
          reload.
        </p>
      </Comment>
      <Comment
        avatar={<Avatar size="md">AR</Avatar>}
        author="Alex Rivera"
        time={<time dateTime="2026-08-28T10:15">45 minutes ago</time>}
        actions={<a href="#comments">Reply</a>}
        replies={
          <>
            <Comment
              avatar={<Avatar size="sm">JC</Avatar>}
              author="Jetha Chan"
              time={<time dateTime="2026-08-28T10:40">20 minutes ago</time>}
              actions={<a href="#comments">Reply</a>}
            >
              <p>Nice catch — filed LOZ-77 for the contrast pass.</p>
            </Comment>
            <CommentEditor
              avatar={<Avatar size="sm">JC</Avatar>}
              label="Reply to Alex Rivera"
              placeholder="Reply…"
            />
          </>
        }
      >
        <p>
          Looks good to me, though the warning lozenge could use another
          contrast check in dark mode.
        </p>
      </Comment>
      <CommentEditor
        avatar={<Avatar size="md">JC</Avatar>}
        label="Add a comment"
        placeholder="Add a comment…"
      />
    </CommentThread>
  );
}
