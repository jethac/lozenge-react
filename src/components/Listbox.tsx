import {
  forwardRef,
  type HTMLAttributes,
  type LiHTMLAttributes,
  type SelectHTMLAttributes,
} from "react";
import { cx } from "../lib/cx";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Danger border; also sets `aria-invalid="true"`. */
  invalid?: boolean;
}

/**
 * Customizable select (`<select class="form-select select">`): a native
 * select progressively enhanced with `appearance: base-select`. Supporting
 * browsers render the picker as a styled overlay panel; others keep the
 * fully native picker with the `.form-select` skin. No extra markup, no JS —
 * semantics, keyboard, and AT behavior stay native in both modes. Must have
 * an associated label (`id` + `htmlFor`) or `aria-label`. Children are
 * native `<option>` (optionally inside `<optgroup>`).
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ invalid, className, ...rest }, ref) {
    return (
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cx("form-select", "select", invalid && "is-invalid", className)}
        {...rest}
      />
    );
  },
);

export interface ListboxProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Accessible name for the listbox (`aria-label`). Always name it — pass
   * this, or `aria-labelledby` pointing at a visible caption.
   */
  label?: string;
}

/**
 * Always-open listbox (`<ul class="listbox" role="listbox">`): a static list
 * styled like an open picker panel, for pick-lists that stay visible
 * (sidebars, transfer lists, command palettes). Purely presentational +
 * ARIA — it ships no keyboard behavior; if users change the selection you
 * must script focus management and `aria-selected` updates yourself. For
 * plain form input prefer the native `Select`.
 */
export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(
  function Listbox({ label, className, ...rest }, ref) {
    return (
      <ul
        ref={ref}
        role="listbox"
        aria-label={label}
        className={cx("listbox", className)}
        {...rest}
      />
    );
  },
);

export interface ListboxOptionProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Chosen row: sets the `.selected` class and keeps `aria-selected` in sync. */
  selected?: boolean;
  /** Inert row: sets the `.disabled` class and `aria-disabled="true"`. */
  disabled?: boolean;
}

/**
 * Option row (`<li class="listbox-option" role="option">`). Selection is
 * conveyed twice — the `.selected` class for styling and `aria-selected` for
 * AT — and this component keeps the two in sync.
 */
export const ListboxOption = forwardRef<HTMLLIElement, ListboxOptionProps>(
  function ListboxOption({ selected = false, disabled, className, ...rest }, ref) {
    return (
      <li
        ref={ref}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        className={cx(
          "listbox-option",
          selected && "selected",
          disabled && "disabled",
          className,
        )}
        {...rest}
      />
    );
  },
);
