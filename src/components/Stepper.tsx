import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/cx";

export interface StepperProps extends HTMLAttributes<HTMLElement> {
  /**
   * Root element. `"ol"` (default, preferred — step count and position are
   * announced) holds `<li>` steps; `"div"` holds `<details>` steps
   * (`<details>` cannot be a child of `<ol>`). Don't mix flavors.
   */
  as?: "ol" | "div";
}

/**
 * Vertical stepper with per-step content for setup flows and long forms
 * broken into stages (`class="stepper"`). Markers reuse the tracker's state
 * language — done / current / upcoming — joined by a connector down the
 * marker column. Two flavors share one skin: class-controlled (`as="ol"`,
 * content shown via the step's `expanded` prop — app/server drives state) and
 * zero-JS expandable (`as="div"` with `StepperStep as="details"` — native
 * disclosure does the toggling). For a compact horizontal readout use the
 * tracker instead.
 */
export const Stepper = forwardRef<HTMLElement, StepperProps>(function Stepper(
  { as: Root = "ol", className, ...rest },
  ref,
) {
  return (
    <Root
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cx("stepper", className)}
      {...rest}
    />
  );
});

export interface StepperStepProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Step element. `"li"` (default) for the class-controlled flavor inside
   * `<Stepper>`; `"details"` for the zero-JS disclosure flavor inside
   * `<Stepper as="div">` (the header becomes the `<summary>` trigger).
   */
  as?: "li" | "details";
  /** Marker content — the step number. Done steps swap it for a check via CSS; keep the number in the markup. */
  marker: ReactNode;
  /** Step name (semibold). */
  title: ReactNode;
  /** Small subtle annotation under the title, e.g. "Optional" or a completion summary. */
  optional?: ReactNode;
  /** Completed step — success marker and connector. */
  done?: boolean;
  /** The active step (at most one) — also sets `aria-current="step"`. */
  current?: boolean;
  /**
   * Shows the step's content: `.expanded` on the `li` flavor, the native
   * `open` attribute on the `details` flavor (where the user can also toggle
   * it — this is only the initial state there).
   */
  expanded?: boolean;
}

/**
 * One step. Children become the `.stepper-content` body, hidden unless the
 * step is expanded. Content hidden by a collapsed step is genuinely removed
 * from the accessibility tree — don't put the only path forward (e.g. the
 * submit button) inside a collapsed step.
 */
export const StepperStep = forwardRef<HTMLElement, StepperStepProps>(
  function StepperStep(
    {
      as = "li",
      marker,
      title,
      optional,
      done,
      current,
      expanded,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const stepClass = cx(
      "stepper-step",
      done && "done",
      current && "current",
      as === "li" && expanded && "expanded",
      className,
    );
    const header = (
      <>
        <span className="stepper-marker">{marker}</span>
        <span className="stepper-title">
          {title}
          {optional != null && (
            <span className="stepper-optional">{optional}</span>
          )}
        </span>
      </>
    );
    const content =
      children != null ? (
        <div className="stepper-content">{children}</div>
      ) : null;

    if (as === "details") {
      return (
        <details
          ref={ref as React.Ref<HTMLDetailsElement>}
          className={stepClass}
          open={expanded}
          aria-current={current ? "step" : undefined}
          {...rest}
        >
          <summary className="stepper-header">{header}</summary>
          {content}
        </details>
      );
    }
    return (
      <li
        ref={ref as React.Ref<HTMLLIElement>}
        className={stepClass}
        aria-current={current ? "step" : undefined}
        {...rest}
      >
        <div className="stepper-header">{header}</div>
        {content}
      </li>
    );
  },
);
