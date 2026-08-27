import { cloneElement, type ReactElement } from "react";
import { cx } from "../lib/cx";

export type TooltipPosition = "bottom" | "left" | "right";

export interface TooltipProps {
  /** Tooltip text — rendered by CSS from the `data-tooltip` attribute. */
  content: string;
  /** Placement relative to the trigger; omit for the default (above). */
  position?: TooltipPosition;
  /** The single trigger element the attribute is applied to. */
  children: ReactElement<{ className?: string; "data-tooltip"?: string }>;
}

/**
 * Pure-CSS tooltip: any element with a `data-tooltip` attribute grows a
 * positioned label on hover/focus-visible — no extra elements, no JS. This
 * component renders no DOM of its own; it clones its single child, adding the
 * `data-tooltip` attribute and the optional `tooltip-bottom`/`tooltip-left`/
 * `tooltip-right` position class.
 *
 * The tooltip text is CSS content, invisible to assistive tech — it must NEVER
 * be the child's only label. Pair it with a real accessible name (`aria-label`
 * or visible text); the tooltip is a visual reinforcement, not the name. It
 * disappears for touch-only users — never put essential information here.
 */
export function Tooltip({ content, position, children }: TooltipProps) {
  return cloneElement(children, {
    "data-tooltip": content,
    className: cx(children.props.className, position && `tooltip-${position}`),
  });
}
