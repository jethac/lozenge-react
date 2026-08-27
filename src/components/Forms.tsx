import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface FormGroupProps extends HTMLAttributes<HTMLElement> {
  /** Root element; use `fieldset` for grouped controls (radios, checks). */
  as?: "div" | "fieldset";
}

/**
 * Form field stack (`.form-group`): wraps one field — label + control +
 * help/error text — and provides vertical rhythm. Do not nest form groups.
 */
export const FormGroup = forwardRef<HTMLElement, FormGroupProps>(
  function FormGroup({ as: Tag = "div", className, ...rest }, ref) {
    return (
      <Tag
        ref={ref as never}
        className={cx("form-group", className)}
        {...rest}
      />
    );
  },
);

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Appends the visual `.required` asterisk. Visual only — also set the
   * `required` attribute on the control itself.
   */
  required?: boolean;
}

/**
 * `<label class="form-label">` above a control. Always associate it with its
 * control via `htmlFor`/`id` unless it wraps the control.
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  function FormLabel({ required, className, children, ...rest }, ref) {
    return (
      <label ref={ref} className={cx("form-label", className)} {...rest}>
        {children}
        {required && (
          <>
            {" "}
            <span className="required">*</span>
          </>
        )}
      </label>
    );
  },
);

export interface FormTextProps extends HTMLAttributes<HTMLSpanElement> {}

/** Help text below a control (`.form-text`). */
export const FormText = forwardRef<HTMLSpanElement, FormTextProps>(
  function FormText({ className, ...rest }, ref) {
    return <span ref={ref} className={cx("form-text", className)} {...rest} />;
  },
);

export interface InvalidFeedbackProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * Error text (`.invalid-feedback`). Pair with `invalid` on the control and
 * link it via `aria-describedby` pointing at this element's `id`.
 */
export const InvalidFeedback = forwardRef<HTMLSpanElement, InvalidFeedbackProps>(
  function InvalidFeedback({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("invalid-feedback", className)} {...rest} />
    );
  },
);

interface FormControlModifierProps {
  /** Reduced height for dense surfaces. */
  compact?: boolean;
  /** Invisible chrome until hovered/focused (inline-edit style). */
  subtle?: boolean;
  /** Danger border; also sets `aria-invalid="true"`. */
  invalid?: boolean;
}

function formControlClass(p: FormControlModifierProps, className?: string) {
  return cx(
    "form-control",
    p.compact && "form-control-compact",
    p.subtle && "form-control-subtle",
    p.invalid && "is-invalid",
    className,
  );
}

export interface FormControlProps
  extends FormControlModifierProps,
    InputHTMLAttributes<HTMLInputElement> {}

/**
 * Text-style input skin (`<input class="form-control">`). Must have an
 * associated label (`id` + `FormLabel htmlFor`), or `aria-label` when a
 * visible label is genuinely impossible — placeholder text is not a label.
 */
export const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  function FormControl(
    { compact, subtle, invalid, className, type = "text", ...rest },
    ref,
  ) {
    return (
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={formControlClass({ compact, subtle, invalid }, className)}
        {...rest}
      />
    );
  },
);

export interface FormTextAreaProps
  extends FormControlModifierProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Textarea flavour of the `.form-control` skin (grows, resize vertical). */
export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea({ compact, subtle, invalid, className, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={formControlClass({ compact, subtle, invalid }, className)}
        {...rest}
      />
    );
  },
);

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {}

/**
 * Native `<select class="form-select">` skinned with a chevron. Must have an
 * associated label. Prefer this over custom dropdowns for form input — it is
 * free keyboard/AT support.
 */
export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  function FormSelect({ className, ...rest }, ref) {
    return (
      <select ref={ref} className={cx("form-select", className)} {...rest} />
    );
  },
);

export interface FormCheckProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Control kind; radios in one group share a `name`. */
  type?: "checkbox" | "radio";
  /** Input id — the row label points at it via `for`, making it clickable. */
  id: string;
  /** Text label rendered after the input. A control without one has no accessible name. */
  label?: ReactNode;
}

/**
 * One checkbox/radio row (`.form-check`): a `.form-check-input` followed by
 * its text label. `className` styles the wrapper row; all other props land on
 * the native input, so keyboard and AT behavior stay native.
 */
export const FormCheck = forwardRef<HTMLInputElement, FormCheckProps>(
  function FormCheck({ type = "checkbox", id, label, className, ...rest }, ref) {
    return (
      <div className={cx("form-check", className)}>
        <input
          ref={ref}
          className="form-check-input"
          type={type}
          id={id}
          {...rest}
        />
        {label !== undefined && <label htmlFor={id}>{label}</label>}
      </div>
    );
  },
);

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Larger switch size (`.toggle-lg`). */
  lg?: boolean;
}

/**
 * iOS-style switch: a `<label class="toggle">` wrapping a visually-hidden
 * checkbox and the drawn `.toggle-slider`. `className` styles the wrapping
 * label; all other props land on the checkbox. The checkbox still needs a
 * text name — pass `aria-label` (e.g. "Send me updates").
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  function Toggle({ lg, className, ...rest }, ref) {
    return (
      <label className={cx("toggle", lg && "toggle-lg", className)}>
        <input ref={ref} type="checkbox" {...rest} />
        <span className="toggle-slider" />
      </label>
    );
  },
);
