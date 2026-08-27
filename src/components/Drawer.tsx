import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  type ButtonHTMLAttributes,
  type DialogHTMLAttributes,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface DrawerProps extends DialogHTMLAttributes<HTMLDialogElement> {
  /** Anchor to the inline-start edge instead of inline-end. */
  start?: boolean;
  /** Wider panel preset. */
  wide?: boolean;
  /**
   * Renders a `.drawer-header` with this title (plus the close button) and
   * points the dialog's `aria-labelledby` at it. Without a title, label the
   * dialog directly with `aria-label` — the drawer must have an accessible
   * name.
   */
  title?: string;
  /** Accessible name for the header close button. */
  closeLabel?: string;
  /**
   * Opens/closes the native dialog as a modal (`showModal()`/`close()`).
   * Omit to drive the dialog declaratively instead — e.g. a
   * `<button commandfor="id" command="show-modal">` invoker.
   */
  open?: boolean;
  /** Fires when the native dialog closes (Esc, close command, `method="dialog"` submit…). */
  onClose?: React.ReactEventHandler<HTMLDialogElement>;
  /** Footer actions, rendered inside a `<form method="dialog">` footer. */
  footer?: ReactNode;
}

/**
 * Side panel on a native `<dialog>`: full-height glass surface anchored to
 * the inline-end edge (inline-start with `start`), sliding in over a blanket
 * backdrop. Use for issue detail panes, filter panels, and secondary
 * workflows that keep page context visible. The platform supplies focus
 * trapping, Esc-to-close, and top-layer stacking. Never nest another glass
 * modal surface (modal, flag, another drawer) inside it.
 */
export const Drawer = forwardRef<HTMLDialogElement, DrawerProps>(function Drawer(
  {
    start,
    wide,
    title,
    closeLabel = "Close drawer",
    open,
    onClose,
    footer,
    id,
    className,
    children,
    ...rest
  },
  ref,
) {
  const inner = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLDialogElement);
  const autoId = useId();
  const dialogId = id ?? autoId;
  const titleId = `${dialogId}-title`;

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
      id={dialogId}
      onClose={onClose}
      aria-labelledby={title !== undefined ? titleId : undefined}
      className={cx("drawer", start && "drawer-start", wide && "drawer-wide", className)}
      {...rest}
    >
      {title !== undefined && (
        <div className="drawer-header">
          <h4 className="drawer-title" id={titleId}>
            {title}
          </h4>
          <DrawerClose dialogId={dialogId} aria-label={closeLabel} />
        </div>
      )}
      <div className="drawer-body">{children}</div>
      {footer !== undefined && (
        <form method="dialog" className="drawer-footer">
          {footer}
        </form>
      )}
    </dialog>
  );
});

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}
/** Top strip: `.drawer-title` plus a `.drawer-close` icon button, space-between. */
export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  function DrawerHeader({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("drawer-header", className)} {...rest} />;
  },
);

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {}
/** The scrolling content region. */
export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  function DrawerBody({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("drawer-body", className)} {...rest} />;
  },
);

export interface DrawerFooterProps extends FormHTMLAttributes<HTMLFormElement> {}
/** Footer as `<form method="dialog">` — buttons inside close the drawer natively. */
export const DrawerFooter = forwardRef<HTMLFormElement, DrawerFooterProps>(
  function DrawerFooter({ className, ...rest }, ref) {
    return (
      <form ref={ref} method="dialog" className={cx("drawer-footer", className)} {...rest} />
    );
  },
);

export interface DrawerCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * id of the drawer dialog — wires the native `commandfor`/`command="close"`
   * invoker so the button closes the dialog with zero JavaScript.
   */
  dialogId?: string;
  /** Icon-only button: an accessible name is required. */
  "aria-label": string;
}

/** Icon-only close button for the drawer header (`.btn .btn-subtle .btn-icon .drawer-close`). */
export const DrawerClose = forwardRef<HTMLButtonElement, DrawerCloseProps>(
  function DrawerClose({ dialogId, className, children, type = "button", ...rest }, ref) {
    const command =
      dialogId !== undefined
        ? ({ commandfor: dialogId, command: "close" } as Record<string, string>)
        : undefined;
    return (
      <button
        ref={ref}
        type={type}
        className={cx("btn", "btn-subtle", "btn-icon", "drawer-close", className)}
        {...command}
        {...rest}
      >
        {children ?? "×"}
      </button>
    );
  },
);
