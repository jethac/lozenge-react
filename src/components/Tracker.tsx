import {
  forwardRef,
  type LiHTMLAttributes,
  type OlHTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface TrackerProps extends OlHTMLAttributes<HTMLOListElement> {}

/**
 * Progress tracker / stepper for multi-step flows (`<ol class="tracker">`):
 * an ordered list of TrackerStep children with numbered circle markers joined
 * by connector lines. Purely presentational — the wizard's pages do the
 * actual navigation. A real `<ol>` so step count and position are announced.
 */
export const Tracker = forwardRef<HTMLOListElement, TrackerProps>(
  function Tracker({ className, ...rest }, ref) {
    return <ol ref={ref} className={cx("tracker", className)} {...rest} />;
  },
);

export interface TrackerStepProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Step number shown in the 24px circle marker (kept in the markup even when done). */
  marker: ReactNode;
  /** Completed step — the marker visually swaps to a check, connectors turn green. */
  done?: boolean;
  /** The active step (at most one) — sets `aria-current="step"`. */
  current?: boolean;
  /** Step name rendered in `.tracker-label` under the marker. Truncates. */
  children?: ReactNode;
}

/**
 * One step of a Tracker (`<li class="tracker-step">`). Steps default to
 * upcoming; set `done` on completed steps and `current` on the active one.
 */
export const TrackerStep = forwardRef<HTMLLIElement, TrackerStepProps>(
  function TrackerStep(
    { marker, done, current, className, children, ...rest },
    ref,
  ) {
    return (
      <li
        ref={ref}
        aria-current={current ? "step" : undefined}
        className={cx(
          "tracker-step",
          done && "tracker-step-done",
          current && "tracker-step-current",
          className,
        )}
        {...rest}
      >
        <span className="tracker-marker">{marker}</span>
        {children != null && <span className="tracker-label">{children}</span>}
      </li>
    );
  },
);
