import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type FieldsetHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

interface SegmentedContextValue {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const SegmentedContext = createContext<SegmentedContextValue | null>(null);

export interface SegmentedProps
  extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> {
  /** Accessible name for the group (required `aria-label` on the fieldset). */
  label: string;
  /** Fills the selected segment with accent-bold (`.segmented-bold`). */
  bold?: boolean;
  /** 24px dense variant (`.segmented-compact`). */
  compact?: boolean;
  /** Radio-group name shared by the segments; auto-generated when omitted. */
  name?: string;
  /** Controlled selected value — matches a `SegmentedOption`'s `value`. */
  value?: string;
  /** Uncontrolled initial selection — matches a `SegmentedOption`'s `value`. */
  defaultValue?: string;
  /** Fires with the newly selected option's `value`. */
  onValueChange?: (value: string) => void;
}

/**
 * Segmented button on a native radio group (`<fieldset class="segmented">`) —
 * zero JS; arrow keys are the platform's. Children are `SegmentedOption`s,
 * each rendering a visually-hidden radio plus its label segment. Keyboard
 * support is native radio-group behavior — Tab enters the group, arrow keys
 * move (and activate) the selection; no extra ARIA roles on the radios.
 * React adds an optional controlled convenience via `value`/`onValueChange`.
 */
export const Segmented = forwardRef<HTMLFieldSetElement, SegmentedProps>(
  function Segmented(
    {
      label,
      bold,
      compact,
      name,
      value,
      defaultValue,
      onValueChange,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const autoName = useId();
    return (
      <fieldset
        ref={ref}
        aria-label={label}
        className={cx(
          "segmented",
          bold && "segmented-bold",
          compact && "segmented-compact",
          className,
        )}
        {...rest}
      >
        <SegmentedContext.Provider
          value={{ name: name ?? autoName, value, defaultValue, onValueChange }}
        >
          {children}
        </SegmentedContext.Provider>
      </fieldset>
    );
  },
);

export interface SegmentedOptionProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "name" | "value" | "children"
  > {
  /** This segment's value within the group. */
  value: string;
  /** Visible segment label content. */
  children: ReactNode;
}

/**
 * One segment: a visually-hidden `<input type="radio">` immediately followed
 * by its `<label>` (the CSS selects `input:checked + label`). Must be a direct
 * child of `Segmented`. Extra props (and `ref`) go to the radio input;
 * `className` merges onto it too. Disable a segment via `disabled`.
 */
export const SegmentedOption = forwardRef<
  HTMLInputElement,
  SegmentedOptionProps
>(function SegmentedOption(
  { value, id, checked, defaultChecked, onChange, className, children, ...rest },
  ref,
) {
  const ctx = useContext(SegmentedContext);
  const autoId = useId();
  const inputId = id ?? autoId;
  const controlled = ctx?.value !== undefined;
  return (
    <>
      <input
        ref={ref}
        type="radio"
        id={inputId}
        name={ctx?.name}
        value={value}
        checked={controlled ? ctx!.value === value : checked}
        defaultChecked={
          !controlled && defaultChecked === undefined
            ? (ctx?.defaultValue !== undefined
                ? ctx.defaultValue === value
                : undefined)
            : defaultChecked
        }
        onChange={(event) => {
          onChange?.(event);
          ctx?.onValueChange?.(value);
        }}
        className={className}
        {...rest}
      />
      <label htmlFor={inputId}>{children}</label>
    </>
  );
});
