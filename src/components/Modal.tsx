import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type DialogHTMLAttributes,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export type ModalSize = "small" | "medium" | "large" | "xlarge" | "fullscreen";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  /** Width preset. */
  size?: ModalSize;
  /** Danger emphasis for destructive confirmations. */
  danger?: boolean;
  /** Renders a `.modal-header` with this title. */
  title?: string;
  /**
   * Opens/closes the native dialog as a modal (`showModal()`/`close()`).
   * Omit to drive the dialog declaratively instead — e.g. a
   * `<button commandfor="id" command="show-modal">` invoker, matching the
   * zero-JS pattern of the CSS framework.
   */
  open?: boolean;
  /** Fires when the native dialog closes (Esc, backdrop `method="dialog"` submit…). */
  onClose?: React.ReactEventHandler<HTMLDialogElement>;
  /** Footer actions, rendered inside a `<form method="dialog">` footer. */
  footer?: ReactNode;
}

/**
 * Native `<dialog class="modal">`. The platform is the behavior layer: focus
 * trapping, Esc, `::backdrop`, and `method="dialog"` submission all come from
 * the element itself.
 */
export const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { size = "medium", danger, title, open, onClose, footer, className, children, ...rest },
  ref,
) {
  const inner = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLDialogElement);

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
      className={cx("modal", `modal-${size}`, danger && "modal-danger", className)}
      {...rest}
    >
      {title !== undefined && (
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
      )}
      <div className="modal-body">{children}</div>
      {footer !== undefined && (
        <form method="dialog" className="modal-footer">
          {footer}
        </form>
      )}
    </dialog>
  );
});

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  function ModalHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("modal-header", className)} {...rest} />;
  },
);

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  function ModalBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("modal-body", className)} {...rest} />;
  },
);

export interface ModalFooterProps extends FormHTMLAttributes<HTMLFormElement> {}
/** Footer as `<form method="dialog">` — buttons inside close the dialog natively. */
export const ModalFooter = forwardRef<HTMLFormElement, ModalFooterProps>(
  function ModalFooter({ className, ...rest }, ref) {
    return (
      <form ref={ref} method="dialog" className={cx("modal-footer", className)} {...rest} />
    );
  },
);
