import {
  forwardRef,
  type ChangeEventHandler,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Names what the remove button removes (e.g. "Remove frontend", not just
   * "Remove"). Providing it renders a `button.chip-remove` after the label,
   * making this an input chip.
   */
  removeLabel?: string;
  /** Click handler for the remove button. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Compact 24px pill (`<span class="chip">`) — the Lozenge take on Material's
 * chip family. Bare it is a static pill; with `removeLabel` it becomes an
 * input chip with a remove button. For selection use ChoiceChip / FilterChip.
 */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(function Chip(
  { removeLabel, onRemove, className, children, ...rest },
  ref,
) {
  return (
    <span ref={ref} className={cx("chip", className)} {...rest}>
      {children}
      {removeLabel !== undefined && (
        <button
          type="button"
          className="chip-remove"
          aria-label={removeLabel}
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
});

interface SelectionChipProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  /** Radio/checkbox group name. Give each choice group a distinct name. */
  name?: string;
  /** Submitted value of the underlying input. */
  value?: string;
  /** Controlled checked state of the underlying input. */
  checked?: boolean;
  /** Uncontrolled initial checked state. */
  defaultChecked?: boolean;
  /** Change handler for the underlying input. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Disables the input (never the label) — the chip grays out via `:has()`. */
  disabled?: boolean;
  /** Visible label text, rendered in the `<span>` the ✓ indicator targets. */
  children?: ReactNode;
}

export interface ChoiceChipProps extends SelectionChipProps {
  /** Radio group name — all chips in one choice group share it. */
  name: string;
}

function selectionChip(
  role: "chip-choice" | "chip-filter",
  inputType: "radio" | "checkbox",
) {
  return function SelectionChip(
    {
      name,
      value,
      checked,
      defaultChecked,
      onChange,
      disabled,
      className,
      children,
      ...rest
    }: SelectionChipProps,
    ref: React.ForwardedRef<HTMLLabelElement>,
  ) {
    return (
      <label ref={ref} className={cx("chip", role, className)} {...rest}>
        <input
          type={inputType}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
        />
        <span>{children}</span>
      </label>
    );
  };
}

/**
 * Single-select choice chip: `<label class="chip chip-choice">` wrapping a
 * visually-hidden radio. Native radio semantics — Tab reaches the group,
 * arrow keys move within it; no ARIA roles added on top.
 */
export const ChoiceChip = forwardRef<HTMLLabelElement, ChoiceChipProps>(
  selectionChip("chip-choice", "radio"),
);
ChoiceChip.displayName = "ChoiceChip";

export interface FilterChipProps extends SelectionChipProps {}

/**
 * Multi-select filter chip: `<label class="chip chip-filter">` wrapping a
 * visually-hidden checkbox; grows a ✓ when checked. Space toggles it —
 * native checkbox semantics, no ARIA roles added on top.
 */
export const FilterChip = forwardRef<HTMLLabelElement, FilterChipProps>(
  selectionChip("chip-filter", "checkbox"),
);
FilterChip.displayName = "FilterChip";
