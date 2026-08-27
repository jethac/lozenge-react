import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  type DialogHTMLAttributes,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface SheetProps extends DialogHTMLAttributes<HTMLDialogElement> {
  /** Raises max-height from 60vh to 90vh. */
  tall?: boolean;
  /**
   * Renders a `.sheet-header` with this title and points the dialog's
   * `aria-labelledby` at it. Without a title, label the dialog directly with
   * `aria-label` — the sheet must have an accessible name.
   */
  title?: string;
  /** The decorative grab-affordance pill at the top. On by default. */
  handle?: boolean;
  /**
   * Opens/closes the native dialog as a modal (`showModal()`/`close()`).
   * Omit to drive the dialog declaratively instead — e.g. a
   * `<button commandfor="id" command="show-modal">` invoker.
   */
  open?: boolean;
  /** Fires when the native dialog closes (Esc, `method="dialog"` submit…). */
  onClose?: React.ReactEventHandler<HTMLDialogElement>;
  /** Footer actions, rendered inside a `<form method="dialog">` footer. */
  footer?: ReactNode;
}

/**
 * Bottom sheet on a native `<dialog>` (Material BottomSheet equivalent): a
 * bottom-anchored glass surface sliding up over a blanket backdrop. Use for
 * mobile-friendly action lists, share targets, and quick forms. The platform
 * is the behavior layer: focus trapping, Esc, `::backdrop`, and
 * `method="dialog"` submission come from the element itself. Never nest
 * another glass surface (modal, drawer, flag, another sheet) inside it.
 */
export const Sheet = forwardRef<HTMLDialogElement, SheetProps>(function Sheet(
  { tall, title, handle = true, open, onClose, footer, className, children, ...rest },
  ref,
) {
  const inner = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLDialogElement);
  const titleId = useId();

  // `open` prop → showModal()/close(), so the dialog is a *modal* (the React
  // `open` attribute alone would show it non-modally, without backdrop).
  useEffect(() => {
    const el = inner.current;
    if (!el || open === undefined) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={inner}
      onClose={onClose}
      aria-labelledby={title !== undefined ? titleId : undefined}
      className={cx("sheet", tall && "sheet-tall", className)}
      {...rest}
    >
      {handle && <div className="sheet-handle" />}
      {title !== undefined && (
        <div className="sheet-header">
          <h4 className="sheet-title" id={titleId}>
            {title}
          </h4>
        </div>
      )}
      <div className="sheet-body">{children}</div>
      {footer !== undefined && (
        <form method="dialog" className="sheet-footer">
          {footer}
        </form>
      )}
    </dialog>
  );
});

export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}
/** Title strip below the handle: `.sheet-title` plus an optional trailing control. */
export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
  function SheetHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("sheet-header", className)} {...rest} />;
  },
);

export interface SheetBodyProps extends HTMLAttributes<HTMLDivElement> {}
/** The scrolling content region. */
export const SheetBody = forwardRef<HTMLDivElement, SheetBodyProps>(
  function SheetBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("sheet-body", className)} {...rest} />;
  },
);

export interface SheetFooterProps extends FormHTMLAttributes<HTMLFormElement> {}
/** Footer as `<form method="dialog">` — buttons inside close the sheet natively. */
export const SheetFooter = forwardRef<HTMLFormElement, SheetFooterProps>(
  function SheetFooter({ className, ...rest }, ref) {
    return (
      <form ref={ref} method="dialog" className={cx("sheet-footer", className)} {...rest} />
    );
  },
);
