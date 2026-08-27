import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface CommentThreadProps extends HTMLAttributes<HTMLElement> {
  /** Root element (`div` by default; `section` when the stream is a page landmark). */
  as?: "div" | "section";
}

/**
 * Issue comment stream: a vertical stack of Comment rows and, typically, a
 * trailing CommentEditor reply box. Order comments chronologically in the
 * DOM — the visual stack matches reading order.
 */
export const CommentThread = forwardRef<HTMLElement, CommentThreadProps>(
  function CommentThread({ as = "div", className, ...rest }, ref) {
    const Tag = as as "div";
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cx("comment-thread", className)}
        {...rest}
      />
    );
  },
);

export interface CommentProps extends HTMLAttributes<HTMLElement> {
  /** Root element; use `li` when the thread is a list, `article` for standalone comments. */
  as?: "div" | "article" | "li";
  /** Leading avatar, rendered in the `.comment-avatar` column (initials are decorative when `author` is visible). */
  avatar?: ReactNode;
  /** Author name, medium weight, in the `.comment-meta` row. */
  author?: ReactNode;
  /** Timestamp beside the author (render `<time dateTime="…">` when possible). */
  time?: ReactNode;
  /** Small subtle Reply/Edit links — must be real links or buttons. */
  actions?: ReactNode;
  /** Nested reply Comment rows, stacked in an indented `.comment-replies` rail — never place a Comment directly inside another. */
  replies?: ReactNode;
}

/**
 * One comment: avatar column plus content column holding a meta line
 * (author, timestamp), the body (children), an actions row, and optionally a
 * `.comment-replies` rail of nested reply comments.
 */
export const Comment = forwardRef<HTMLElement, CommentProps>(function Comment(
  { as = "div", avatar, author, time, actions, replies, className, children, ...rest },
  ref,
) {
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cx("comment", className)}
      {...rest}
    >
      {avatar !== undefined && <div className="comment-avatar">{avatar}</div>}
      <div className="comment-content">
        {(author !== undefined || time !== undefined) && (
          <div className="comment-meta">
            {author !== undefined && (
              <span className="comment-author">{author}</span>
            )}
            {time !== undefined && <span className="comment-time">{time}</span>}
          </div>
        )}
        <div className="comment-body">{children}</div>
        {actions !== undefined && (
          <div className="comment-actions">{actions}</div>
        )}
        {replies !== undefined && (
          <div className="comment-replies">{replies}</div>
        )}
      </div>
    </Tag>
  );
});

export interface CommentEditorProps extends HTMLAttributes<HTMLElement> {
  /** Root element (`form` when submission is involved — pair it with a real submit button). */
  as?: "div" | "form";
  /** Current user's avatar, rendered before the textarea. */
  avatar?: ReactNode;
  /**
   * Accessible name for the reply textarea (`aria-label`) — required because
   * placeholder text is not an accessible name.
   */
  label: string;
  /** Placeholder for the reply textarea. */
  placeholder?: string;
  /** Extra props for the `<textarea class="form-control">` (`value`, `onChange`, `rows`…). */
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

/**
 * Reply box: the current user's avatar beside a `.form-control` textarea.
 * Usually the last row of a CommentThread; also usable inside a comment's
 * replies rail for inline replying. Children render after the textarea
 * (e.g. a submit button when rendered `as="form"`).
 */
export const CommentEditor = forwardRef<HTMLElement, CommentEditorProps>(
  function CommentEditor(
    { as = "div", avatar, label, placeholder, textareaProps, className, children, ...rest },
    ref,
  ) {
    const Tag = as as "div";
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cx("comment-editor", className)}
        {...rest}
      >
        {avatar}
        <textarea
          className="form-control"
          aria-label={label}
          placeholder={placeholder}
          {...textareaProps}
        />
        {children}
      </Tag>
    );
  },
);
