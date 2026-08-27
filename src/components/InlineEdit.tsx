import {
  forwardRef,
  useId,
  type FormHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";
import { Button } from "./Button";

export interface InlineEditProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * Accessible name for the visually-hidden mode-toggle checkbox — name it
   * for what it edits (e.g. "Edit summary"). It is the keyboard entry point:
   * Tab to it, Space opens the editor.
   */
  label: string;
  /** Current field value: shown in the read view and as the editor's default. */
  value: string;
  /** `name` attribute on the editor input (form submission carries the value). */
  name?: string;
  /**
   * Accessible name for the editor input itself — name it after the field
   * (e.g. "Summary").
   */
  inputLabel?: string;
  /** Renders the editor as a growing textarea instead of a text input. */
  multiline?: boolean;
  /** Id for the toggle checkbox / view label pair; auto-generated if omitted. */
  toggleId?: string;
  /** Confirm button content. */
  saveLabel?: ReactNode;
  /** Cancel button content. */
  cancelLabel?: ReactNode;
}

/**
 * In-place view/edit swap for a single field value (`.inline-edit`), zero
 * JS: a visually-hidden checkbox drives the swap — clicking the read view
 * checks it and reveals the editor (a `.form-control` plus compact
 * Save/Cancel buttons). The root is a `<form>`, so Cancel (`type="reset"`)
 * unchecks the toggle AND reverts the field, and Save submits — all platform
 * behavior. The pencil affordance is CSS-only; the checkbox `label` carries
 * that meaning for AT.
 */
export const InlineEdit = forwardRef<HTMLFormElement, InlineEditProps>(
  function InlineEdit(
    {
      label,
      value,
      name,
      inputLabel,
      multiline,
      toggleId,
      saveLabel = "Save",
      cancelLabel = "Cancel",
      className,
      ...rest
    },
    ref,
  ) {
    const autoId = useId();
    const id = toggleId ?? `inline-edit-${autoId}`;
    return (
      <form ref={ref} className={cx("inline-edit", className)} {...rest}>
        <input type="checkbox" id={id} aria-label={label} />
        <label className="inline-edit-view" htmlFor={id}>
          {value}
        </label>
        <div className="inline-edit-editor">
          {multiline ? (
            <textarea
              className="form-control"
              name={name}
              defaultValue={value}
              aria-label={inputLabel}
            />
          ) : (
            <input
              className="form-control"
              type="text"
              name={name}
              defaultValue={value}
              aria-label={inputLabel}
            />
          )}
          <Button appearance="primary" compact type="submit">
            {saveLabel}
          </Button>
          <Button appearance="subtle" compact type="reset">
            {cancelLabel}
          </Button>
        </div>
      </form>
    );
  },
);
