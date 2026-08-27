import {
  forwardRef,
  type DetailsHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface AccordionProps extends HTMLAttributes<HTMLElement> {
  /** Root element (`div` by default; `section` when the group is a landmark of its own). */
  as?: "div" | "section";
}

/**
 * Expansion-panel list on native `<details>`/`<summary>`: a bordered surface
 * group of panels separated by separator borders. The platform supplies
 * expand/collapse, keyboard, and semantics — give every panel the same
 * `name` for exclusive-open behavior with zero JS.
 */
export const Accordion = forwardRef<HTMLElement, AccordionProps>(
  function Accordion({ as = "div", className, ...rest }, ref) {
    const Tag = as as "div";
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        className={cx("accordion", className)}
        {...rest}
      />
    );
  },
);

export interface AccordionPanelProps
  extends DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Clickable header content, rendered in the `<summary class="accordion-header">`. */
  header: ReactNode;
  /**
   * Same value on every panel for exclusive-open behavior (opening one closes
   * the others) — a platform feature of `<details name>`. Omit to allow
   * several panels open at once.
   */
  name?: string;
  /** Expand this panel initially (native `open` attribute). */
  open?: boolean;
}

/**
 * One `<details class="accordion-panel">` per panel: rotating-chevron
 * `<summary class="accordion-header">` plus a padded `.accordion-body`.
 */
export const AccordionPanel = forwardRef<HTMLDetailsElement, AccordionPanelProps>(
  function AccordionPanel({ header, className, children, ...rest }, ref) {
    return (
      <details
        ref={ref}
        className={cx("accordion-panel", className)}
        {...rest}
      >
        <summary className="accordion-header">{header}</summary>
        <div className="accordion-body">{children}</div>
      </details>
    );
  },
);
