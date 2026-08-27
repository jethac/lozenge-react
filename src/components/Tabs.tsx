import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LiHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface TabsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Root element. `"ul"` (default) for the link recipe; `"div"` for the strip
   * of a `Tabset`; `"nav"` when the strip is itself a navigation landmark.
   */
  as?: "ul" | "div" | "nav";
}

/**
 * Horizontal tab strip with an underline indicator (`class="tabs"`). Two
 * recipes share the skin: a plain link strip (`<ul>` of `Tab`s where YOU wire
 * the switching) and the zero-JS `Tabset`, which switches panes with hidden
 * radio inputs and `:has()` (children are then `TabsetTab`s).
 */
export const Tabs = forwardRef<HTMLElement, TabsProps>(function Tabs(
  { as: Root = "ul", className, ...rest },
  ref,
) {
  return (
    <Root
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cx("tabs", className)}
      {...rest}
    />
  );
});

export interface TabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The current tab (`.active` underline). */
  active?: boolean;
  /** Disabled tab — also sets `aria-disabled`. */
  disabled?: boolean;
  /** Props for the wrapping `<li>`. */
  itemProps?: LiHTMLAttributes<HTMLLIElement>;
}

/**
 * A link-recipe tab: `<li><a class="tab">`. Carries no tab ARIA semantics by
 * itself — add `role="tablist"/"tab"/"tabpanel"` and `aria-selected` if you
 * script the switching. For zero-JS switching, use `Tabset` + `TabsetTab`.
 */
export const Tab = forwardRef<HTMLAnchorElement, TabProps>(function Tab(
  { active, disabled, itemProps, className, ...rest },
  ref,
) {
  return (
    <li {...itemProps}>
      <a
        ref={ref}
        aria-disabled={disabled ? "true" : undefined}
        className={cx(
          "tab",
          active && "active",
          disabled && "disabled",
          className,
        )}
        {...rest}
      />
    </li>
  );
});

interface TabsetContextValue {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const TabsetContext = createContext<TabsetContextValue | null>(null);

export interface TabsetProps extends HTMLAttributes<HTMLDivElement> {
  /** Radio-group name shared by the tabs; auto-generated when omitted. */
  name?: string;
  /** Controlled selected tab — matches a `TabsetTab`'s `value`. */
  value?: string;
  /** Uncontrolled initial tab — matches a `TabsetTab`'s `value`. */
  defaultValue?: string;
  /** Fires with the newly selected tab's `value`. */
  onValueChange?: (value: string) => void;
}

/**
 * CSS-only switching tabs (`<div class="tabset">`): hidden radio inputs
 * inside the `<Tabs as="div">` strip drive which `TabPane` is visible via
 * `:has()` — no JavaScript. Supports at most 8 tabs. The Nth radio shows the
 * Nth pane, so radio order and pane order must correspond exactly. Keyboard
 * support comes from the native radio group (arrow keys switch tab and pane).
 * React adds an optional controlled convenience via `value`/`onValueChange`.
 */
export const Tabset = forwardRef<HTMLDivElement, TabsetProps>(function Tabset(
  { name, value, defaultValue, onValueChange, className, children, ...rest },
  ref,
) {
  const autoName = useId();
  return (
    <div ref={ref} className={cx("tabset", className)} {...rest}>
      <TabsetContext.Provider
        value={{ name: name ?? autoName, value, defaultValue, onValueChange }}
      >
        {children}
      </TabsetContext.Provider>
    </div>
  );
});

export interface TabsetTabProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "name" | "value" | "children"
  > {
  /** This tab's value within the tabset. */
  value: string;
  /** Visible tab label content. */
  children: ReactNode;
}

/**
 * One tabset tab: a visually-hidden `<input type="radio">` immediately
 * followed by its `<label class="tab">` (the CSS selects
 * `input:checked + .tab`). Must be a direct child of the tabset's
 * `<Tabs as="div">` strip. Extra props (and `ref`) go to the radio input;
 * `className` merges onto the label.
 */
export const TabsetTab = forwardRef<HTMLInputElement, TabsetTabProps>(
  function TabsetTab(
    { value, id, checked, defaultChecked, onChange, className, children, ...rest },
    ref,
  ) {
    const ctx = useContext(TabsetContext);
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
          {...rest}
        />
        <label htmlFor={inputId} className={cx("tab", className)}>
          {children}
        </label>
      </>
    );
  },
);

export interface TabPanesProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Wrapper whose element children must be ONLY `TabPane`s, in the same order
 * as the tabset's radios — pane visibility is matched by `:nth-child`.
 */
export const TabPanes = forwardRef<HTMLDivElement, TabPanesProps>(
  function TabPanes({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("tab-panes", className)} {...rest} />;
  },
);

export interface TabPaneProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * One pane per tab (`<div class="tab-pane">`), a direct child of `TabPanes`.
 * Inactive panes are `display:none`, so hidden content is correctly removed
 * from the accessibility tree.
 */
export const TabPane = forwardRef<HTMLDivElement, TabPaneProps>(
  function TabPane({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("tab-pane", className)} {...rest} />;
  },
);
