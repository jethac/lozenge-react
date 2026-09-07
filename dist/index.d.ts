import { AnchorHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ChangeEventHandler } from 'react';
import { DetailsHTMLAttributes } from 'react';
import { DialogHTMLAttributes } from 'react';
import { FieldsetHTMLAttributes } from 'react';
import { FormHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react';
import { JSXElementConstructor } from 'react';
import { LabelHTMLAttributes } from 'react';
import { LiHTMLAttributes } from 'react';
import { MouseEventHandler } from 'react';
import { OlHTMLAttributes } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

/**
 * Expansion-panel list on native `<details>`/`<summary>`: a bordered surface
 * group of panels separated by separator borders. The platform supplies
 * expand/collapse, keyboard, and semantics — give every panel the same
 * `name` for exclusive-open behavior with zero JS.
 */
export declare const Accordion: ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLElement>>;

/**
 * One `<details class="accordion-panel">` per panel: rotating-chevron
 * `<summary class="accordion-header">` plus a padded `.accordion-body`.
 */
export declare const AccordionPanel: ForwardRefExoticComponent<AccordionPanelProps & RefAttributes<HTMLDetailsElement>>;

export declare interface AccordionPanelProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
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

export declare interface AccordionProps extends HTMLAttributes<HTMLElement> {
    /** Root element (`div` by default; `section` when the group is a landmark of its own). */
    as?: "div" | "section";
}

/**
 * Write a theme onto a root element (the document root by default). Usable
 * outside React; the provider calls this under the hood.
 */
export declare function applyLozengeTheme(theme: Partial<LozengeTheme>, root?: HTMLElement): void;

/**
 * Circular user/entity avatar showing an image or initials fallback, with
 * optional presence dot and square variant for projects/apps
 * (`<span class="avatar avatar-md">`).
 */
export declare const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLSpanElement>>;

/**
 * Overlapping horizontal stack of avatars, each gaining a surface-colored
 * ring (`<span class="avatar-group">`). Use the same size for all children;
 * truncation counters ("+4") are plain avatars.
 */
export declare const AvatarGroup: ForwardRefExoticComponent<AvatarGroupProps & RefAttributes<HTMLSpanElement>>;

export declare interface AvatarGroupProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Accessible name for the whole stack (e.g. "Watchers: Alex, Bo, Cam and 4
     * others"); when given the group gets `role="group"`.
     */
    label?: string;
}

export declare type AvatarPresence = "online" | "busy" | "offline";

export declare interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    /** Mandatory size — the base `.avatar` class sets no dimensions. */
    size: AvatarSize;
    /** Presence dot (color-only ::after) — convey presence in text too where it matters. */
    presence?: AvatarPresence;
    /** Square variant for projects/apps instead of the circular person avatar. */
    square?: boolean;
    /** Optional photo URL; omit it and pass 1–2 characters as children for the initials fallback. */
    src?: string;
    /** Required with `src`: the full name for assistive tech (initials alone don't identify a person). */
    alt?: string;
}

export declare type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Sprint planning backlog (`<div class="backlog">`): a flat list of
 * separator-divided `BacklogItem` rows. Pair with a `SprintHeader` strip
 * above it.
 */
export declare const Backlog: ForwardRefExoticComponent<BacklogProps & RefAttributes<HTMLDivElement>>;

export declare type BacklogIssueType = "story" | "bug" | "task" | "epic";

/**
 * One backlog row: issue-type square, key, flexible truncating summary
 * (children), then optional status lozenge, story-point badge, and assignee
 * avatar — each rendered only when its prop is present, matching the
 * `<lz-backlog-item>` authoring template.
 */
export declare const BacklogItem: ForwardRefExoticComponent<BacklogItemProps & RefAttributes<HTMLDivElement>>;

export declare interface BacklogItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Issue type — sets the fixed-color type square variant. */
    type?: BacklogIssueType;
    /** Accessible name for the type square; defaults to the type token. */
    typeLabel?: string;
    /** The issue identifier, e.g. "LOZ-31" (`key` is reserved by React). */
    issueKey: ReactNode;
    /** Workflow status — renders a `.lozenge.lozenge-{status}` pill when set. */
    status?: LozengeStatus;
    /** Nicer status pill text (e.g. "In progress"); falls back to the raw status token. */
    statusLabel?: ReactNode;
    /** Story-point estimate — renders a `.badge` labelled "N story points" when set. */
    points?: number | string;
    /** Assignee initials — renders a trailing `.avatar.avatar-sm` when set. */
    assignee?: ReactNode;
    /** Full assignee name for assistive tech (initials alone don't identify). */
    assigneeLabel?: string;
}

export declare interface BacklogProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * A small pill for numeric counters — unread counts, story points, +/− deltas
 * (`<span class="badge">`). For status words use Lozenge; for free-text labels
 * use Tag. Pair a bare number with visible text or an `aria-label` describing
 * what is being counted.
 */
export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Color tone; omit for the neutral counter. */
    tone?: BadgeTone;
}

export declare type BadgeTone = "primary" | "important" | "added" | "removed";

/**
 * Full-width single-line page banner (maintenance notices, read-only mode,
 * outages). Sits above or below the navbar spanning the viewport; content is
 * centered and links inherit the bold text color. If a banner appears
 * dynamically (e.g. connection lost) give it `role="status"` / `role="alert"`.
 */
export declare const Banner: ForwardRefExoticComponent<BannerProps & RefAttributes<HTMLDivElement>>;

export declare interface BannerProps extends HTMLAttributes<HTMLDivElement> {
    /** Bold tone; `inverse` uses the tooltip surface pair (events, launches). */
    tone?: BannerTone;
}

export declare type BannerTone = "warning" | "error" | "inverse";

/**
 * Kanban board layout (`<div class="board">`): a horizontally scrolling flex
 * row of fixed-width columns. Use it as the main work view of a project;
 * children are `BoardColumn`s, whose cards wells hold `.issue-card` elements.
 */
export declare const Board: ForwardRefExoticComponent<BoardProps & RefAttributes<HTMLDivElement>>;

/**
 * One fixed-width, sunken-background column of a `Board`. Compose a
 * `BoardColumnHeader` and a `BoardColumnCards` inside it.
 */
export declare const BoardColumn: ForwardRefExoticComponent<BoardColumnProps & RefAttributes<HTMLDivElement>>;

/**
 * Padded well holding the stack of `.issue-card` elements; keeps a min-height
 * so empty columns remain drop targets.
 */
export declare const BoardColumnCards: ForwardRefExoticComponent<BoardColumnCardsProps & RefAttributes<HTMLDivElement>>;

export declare interface BoardColumnCardsProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Column title row (flex; truncates), commonly ending with a badge count —
 * pass it via `count`.
 */
export declare const BoardColumnHeader: ForwardRefExoticComponent<BoardColumnHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface BoardColumnHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Issue count, rendered as a trailing `.badge` after the title. */
    count?: ReactNode;
}

export declare interface BoardColumnProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface BoardProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Bottom navigation bar (`<nav class="bottom-nav">`) for phone-width layouts:
 * a 56px frosted-glass bar of 3–5 evenly-spread top-level destinations, each
 * an icon over an 11px label with a pill indicator behind the active item's
 * icon. Use exactly one per page — fewer than 3 destinations wants tabs, more
 * than 5 wants a sidebar or rail. Never nest another glass surface inside it,
 * and when `fixed`, give the scrolling content enough bottom padding that
 * nothing hides behind the bar.
 */
export declare const BottomNav: ForwardRefExoticComponent<BottomNavProps & RefAttributes<HTMLElement>>;

/** One destination (`<a class="bottom-nav-item">`), flexed to equal widths. */
export declare const BottomNavItem: ForwardRefExoticComponent<BottomNavItemProps & RefAttributes<HTMLAnchorElement>>;

export declare interface BottomNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** 20px icon slot content (inline SVG, `aria-hidden` — decorative). */
    icon: ReactNode;
    /**
     * 11px label under the icon. Omit only when the icon is universally
     * understood — then give the item an `aria-label`.
     */
    label?: ReactNode;
    /**
     * Marks the current destination (exactly one per bar): adds `.active` and
     * `aria-current="page"` (required by the contract).
     */
    active?: boolean;
}

export declare interface BottomNavProps extends HTMLAttributes<HTMLElement> {
    /** Pins the bar to the bottom of the viewport (`.bottom-nav-fixed`). */
    fixed?: boolean;
}

/** The standard action button (`<button class="btn">`). */
export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare type ButtonAppearance = "primary" | "warning" | "danger" | "subtle" | "link" | "subtle-link";

declare interface ButtonBaseProps {
    /** Emphasis variant; omit for the standard button. */
    appearance?: ButtonAppearance;
    /** Reduced height for dense surfaces. */
    compact?: boolean;
    /** Square icon-only button — requires `aria-label`. */
    icon?: boolean;
    /** Full-width block button. */
    block?: boolean;
    /** Fully rounded ends. */
    pill?: boolean;
    /** Toggled-on state. */
    active?: boolean;
}

/** Plain flex wrapper of direct Button children. */
export declare const ButtonGroup: ForwardRefExoticComponent<ButtonGroupProps & RefAttributes<HTMLDivElement>>;

export declare interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    /** Accessible name; when given the group gets `role="group"`. */
    label?: string;
}

export declare interface ButtonProps extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
}

/**
 * Month-grid calendar (Material DatePicker-style) that is honestly
 * presentational: it renders whatever `CalendarDay` cells the app gives it —
 * date math, selection state, month navigation, and range logic are app
 * concerns. The zero-JS behavior path for actually picking a date remains the
 * native `<input type="date">`; use `Calendar` when you control the state and
 * want the picker look. Children are the day cells of `.calendar-grid`,
 * covering full weeks (pad with `outside` days from adjacent months).
 */
export declare const Calendar: ForwardRefExoticComponent<CalendarProps & RefAttributes<HTMLDivElement>>;

/**
 * One day cell of the `.calendar-grid`: a real 32×32 `<button>` so it is
 * focusable and clickable, but with no built-in behavior — an interactive
 * picker wires selection, month paging, and roving arrow-key focus itself.
 * Give each button a full accessible date, e.g. `aria-label="12 August 2026"`,
 * since the visible text is just the day number.
 */
export declare const CalendarDay: ForwardRefExoticComponent<CalendarDayProps & RefAttributes<HTMLButtonElement>>;

export declare interface CalendarDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Accent ring marking today; also sets the required `aria-current="date"`. */
    today?: boolean;
    /** Accent-filled selected day; exposed to assistive tech via `aria-pressed`. */
    selected?: boolean;
    /** Leading/trailing day belonging to an adjacent month. */
    outside?: boolean;
    /** Interior day of a range — fills the whole cell so the band reads as continuous. */
    inRange?: boolean;
    /** First day of a range (pill radius on the outer side only). */
    rangeStart?: boolean;
    /** Last day of a range (pill radius on the outer side only). */
    rangeEnd?: boolean;
}

export declare interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** Month name + year, rendered as a real heading (`.calendar-title`). */
    title: ReactNode;
    /** Heading level for the title, to fit the page outline. */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** When given, renders a compact icon button for paging to the previous month. */
    onPrevMonth?: MouseEventHandler<HTMLButtonElement>;
    /** When given, renders a compact icon button for paging to the next month. */
    onNextMonth?: MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the previous-month button. */
    prevMonthLabel?: string;
    /** Accessible name for the next-month button. */
    nextMonthLabel?: string;
    /** Seven weekday initials, in the locale's week order. */
    weekdays?: readonly ReactNode[];
}

/**
 * Generic raised surface container with optional header/body/footer sections.
 * Use for grouping related content on a page. Cards are non-interactive
 * surfaces — if the whole card should be clickable, put a single `<a>` inside
 * rather than click handlers on the div. Never nest a card in a card.
 */
export declare const Card: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;

/** Padded content region; use for the main content. */
export declare const CardBody: ForwardRefExoticComponent<CardBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
}

/** Optional footer strip with top separator. */
export declare const CardFooter: ForwardRefExoticComponent<CardFooterProps & RefAttributes<HTMLDivElement>>;

export declare interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
}

/** Optional heading strip with bottom separator. Use a real heading element inside. */
export declare const CardHeader: ForwardRefExoticComponent<CardHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Scroll-snap carousel: a horizontally scrolling strip of snap-aligned
 * cards. Zero JS — scrolling, snapping, momentum, keyboard (when focusable
 * content is inside) and RTL all come from the platform's scroll machinery.
 */
export declare const Carousel: ForwardRefExoticComponent<CarouselProps & RefAttributes<HTMLDivElement>>;

/** One snap-aligned item. Image-only items need a text alternative (img alt or a caption). */
export declare const CarouselItem: ForwardRefExoticComponent<CarouselItemProps & RefAttributes<HTMLDivElement>>;

export declare interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    /** 300px card instead of the default width. */
    wide?: boolean;
    /** Caption pinned inside the item (`.carousel-item-caption`). */
    caption?: ReactNode;
}

export declare interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Accessible name for the strip (`aria-label`) — required, the scroller is
     * a meaningful region.
     */
    label: string;
    /** Center-snapping single-feature strip (`.carousel-hero`). */
    hero?: boolean;
}

/**
 * Compact 24px pill (`<span class="chip">`) — the Lozenge take on Material's
 * chip family. Bare it is a static pill; with `removeLabel` it becomes an
 * input chip with a remove button. For selection use ChoiceChip / FilterChip.
 */
export declare const Chip: ForwardRefExoticComponent<ChipProps & RefAttributes<HTMLSpanElement>>;

export declare interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Names what the remove button removes (e.g. "Remove frontend", not just
     * "Remove"). Providing it renders a `button.chip-remove` after the label,
     * making this an input chip.
     */
    removeLabel?: string;
    /** Click handler for the remove button. */
    onRemove?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Single-select choice chip: `<label class="chip chip-choice">` wrapping a
 * visually-hidden radio. Native radio semantics — Tab reaches the group,
 * arrow keys move within it; no ARIA roles added on top.
 */
export declare const ChoiceChip: ForwardRefExoticComponent<ChoiceChipProps & RefAttributes<HTMLLabelElement>>;

export declare interface ChoiceChipProps extends SelectionChipProps {
    /** Radio group name — all chips in one choice group share it. */
    name: string;
}

/**
 * One comment: avatar column plus content column holding a meta line
 * (author, timestamp), the body (children), an actions row, and optionally a
 * `.comment-replies` rail of nested reply comments.
 */
declare const Comment_2: ForwardRefExoticComponent<CommentProps & RefAttributes<HTMLElement>>;
export { Comment_2 as Comment }

/**
 * Reply box: the current user's avatar beside a `.form-control` textarea.
 * Usually the last row of a CommentThread; also usable inside a comment's
 * replies rail for inline replying. Children render after the textarea
 * (e.g. a submit button when rendered `as="form"`).
 */
export declare const CommentEditor: ForwardRefExoticComponent<CommentEditorProps & RefAttributes<HTMLElement>>;

export declare interface CommentEditorProps extends HTMLAttributes<HTMLElement> {
    /** Root element (`form` when submission is involved — pair it with a real submit button). */
    as?: "div" | "form";
    /** Current user's avatar, rendered before the textarea. */
    avatar?: ReactNode;
    /**
     * Accessible name for the reply textarea (`aria-label`) — required because
     * placeholder text is not an accessible name.
     */
    label: string;
    /** Placeholder for the reply textarea. */
    placeholder?: string;
    /** Extra props for the `<textarea class="form-control">` (`value`, `onChange`, `rows`…). */
    textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export declare interface CommentProps extends HTMLAttributes<HTMLElement> {
    /** Root element; use `li` when the thread is a list, `article` for standalone comments. */
    as?: "div" | "article" | "li";
    /** Leading avatar, rendered in the `.comment-avatar` column (initials are decorative when `author` is visible). */
    avatar?: ReactNode;
    /** Author name, medium weight, in the `.comment-meta` row. */
    author?: ReactNode;
    /** Timestamp beside the author (render `<time dateTime="…">` when possible). */
    time?: ReactNode;
    /** Small subtle Reply/Edit links — must be real links or buttons. */
    actions?: ReactNode;
    /** Nested reply Comment rows, stacked in an indented `.comment-replies` rail — never place a Comment directly inside another. */
    replies?: ReactNode;
}

/**
 * Issue comment stream: a vertical stack of Comment rows and, typically, a
 * trailing CommentEditor reply box. Order comments chronologically in the
 * DOM — the visual stack matches reading order.
 */
export declare const CommentThread: ForwardRefExoticComponent<CommentThreadProps & RefAttributes<HTMLElement>>;

export declare interface CommentThreadProps extends HTMLAttributes<HTMLElement> {
    /** Root element (`div` by default; `section` when the stream is a page landmark). */
    as?: "div" | "section";
}

/**
 * GDPR-style cookie/consent notice bar: legal copy (children) with inline
 * links and a cluster of choice buttons. Static in document flow by default;
 * `fixed` pins it bottom-center of the viewport. Non-modal: it must not trap
 * focus or block reading, and is never auto-focused on load. The component
 * is purely presentational — showing, hiding, and persisting the choice are
 * the app's job.
 */
export declare const Consent: ForwardRefExoticComponent<ConsentProps & RefAttributes<HTMLDivElement>>;

export declare interface ConsentProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Short accessible name for the bar (e.g. "Cookie consent") — required so
     * the region landmark is discoverable.
     */
    "aria-label": string;
    /** Pin bottom-center of the viewport, above flags. */
    fixed?: boolean;
    /**
     * Button cluster for the consent choices. Reject and Accept should carry
     * equal prominence (e.g. `.btn` next to `.btn-primary`);
     * preferences/customise is usually a subtle-link button.
     */
    actions: ReactNode;
    /**
     * When set, renders the optional close button wired to this handler. It
     * must be equivalent to Reject — dismissal must never be treated as
     * consent.
     */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the dismiss button. */
    dismissLabel?: string;
}

/** Minimal class-name joiner: skips falsy values, flattens nothing fancy. */
export declare function cx(...parts: Array<string | false | null | undefined>): string;

/**
 * Styled native date input (`<input type="date" class="form-control
 * date-field">`). The native calendar picker IS the behavior layer —
 * keyboard entry, locale formats, AT support. Associate a label via
 * `id`/`htmlFor`, or `aria-label` inside composites like `DateRange`; use
 * `min`/`max`/`required` rather than scripted validation where possible.
 */
export declare const DateField: ForwardRefExoticComponent<DateFieldProps & RefAttributes<HTMLInputElement>>;

export declare interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Reduced height for dense surfaces. */
    compact?: boolean;
    /** Danger border; also sets `aria-invalid="true"`. */
    invalid?: boolean;
}

/**
 * Row layout for a start/end pair (`.date-range`): two `DateField` children
 * flexing equally around a decorative en-dash separator (inserted
 * automatically, `aria-hidden`). Give each field its own `aria-label`
 * ("Start date" / "End date"). The layout imposes no logic — constrain the
 * pair with `min`/`max` in your app.
 */
export declare const DateRange: ForwardRefExoticComponent<DateRangeProps & RefAttributes<HTMLDivElement>>;

export declare interface DateRangeProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Accessible name for the pair (e.g. "Sprint window"); sets `role="group"`
     * + `aria-label` so AT announces the two fields as one range.
     */
    label?: string;
}

/**
 * Side panel on a native `<dialog>`: full-height glass surface anchored to
 * the inline-end edge (inline-start with `start`), sliding in over a blanket
 * backdrop. Use for issue detail panes, filter panels, and secondary
 * workflows that keep page context visible. The platform supplies focus
 * trapping, Esc-to-close, and top-layer stacking. Never nest another glass
 * modal surface (modal, flag, another drawer) inside it.
 */
export declare const Drawer: ForwardRefExoticComponent<DrawerProps & RefAttributes<HTMLDialogElement>>;

/** The scrolling content region. */
export declare const DrawerBody: ForwardRefExoticComponent<DrawerBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
}

/** Icon-only close button for the drawer header (`.btn .btn-subtle .btn-icon .drawer-close`). */
export declare const DrawerClose: ForwardRefExoticComponent<DrawerCloseProps & RefAttributes<HTMLButtonElement>>;

export declare interface DrawerCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * id of the drawer dialog — wires the native `commandfor`/`command="close"`
     * invoker so the button closes the dialog with zero JavaScript.
     */
    dialogId?: string;
    /** Icon-only button: an accessible name is required. */
    "aria-label": string;
}

/** Footer as `<form method="dialog">` — buttons inside close the drawer natively. */
export declare const DrawerFooter: ForwardRefExoticComponent<DrawerFooterProps & RefAttributes<HTMLFormElement>>;

export declare interface DrawerFooterProps extends FormHTMLAttributes<HTMLFormElement> {
}

/** Top strip: `.drawer-title` plus a `.drawer-close` icon button, space-between. */
export declare const DrawerHeader: ForwardRefExoticComponent<DrawerHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface DrawerProps extends DialogHTMLAttributes<HTMLDialogElement> {
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

/** Separator rule between item groups. */
export declare const DropdownDivider: ForwardRefExoticComponent<DropdownDividerProps & RefAttributes<HTMLDivElement>>;

export declare interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {
}

/** Uppercase group heading inside the menu. */
export declare const DropdownHeading: ForwardRefExoticComponent<DropdownHeadingProps & RefAttributes<HTMLDivElement>>;

export declare interface DropdownHeadingProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Action item (`<button class="dropdown-item">`). Close the menu on
 * activation with `popoverTarget={menuId}` + `popoverTargetAction="hide"`.
 * For navigation use DropdownLinkItem.
 */
export declare const DropdownItem: ForwardRefExoticComponent<DropdownItemProps & RefAttributes<HTMLButtonElement>>;

declare interface DropdownItemBaseProps {
    /** Marks the current choice. */
    selected?: boolean;
    /** Destructive-action emphasis. */
    danger?: boolean;
    /** Subtle secondary line rendered under the item label. */
    description?: ReactNode;
}

export declare interface DropdownItemProps extends DropdownItemBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
}

/** Navigation item (`<a class="dropdown-item">`). For actions, use DropdownItem. */
export declare const DropdownLinkItem: ForwardRefExoticComponent<DropdownLinkItemProps & RefAttributes<HTMLAnchorElement>>;

export declare interface DropdownLinkItemProps extends DropdownItemBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
}

/**
 * Dropdown menu, zero JS. Preferred recipe: a trigger button with
 * `popoverTarget` pointing at this menu's `id` opens the `[popover]` menu
 * anchored to it (implicit-anchor positioning) — the platform supplies
 * open/close, light-dismiss, Esc, top-layer, and focus return. Items close
 * the menu on activation via `popoverTarget` + `popoverTargetAction="hide"`;
 * plain links just navigate. Give the menu the `id` your trigger's
 * `popoverTarget` points at.
 */
export declare const DropdownMenu: ForwardRefExoticComponent<DropdownMenuProps & RefAttributes<HTMLDivElement>>;

export declare interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
    /** Align the menu to the inline-end edge of its anchor. */
    end?: boolean;
}

/**
 * Centered explanation for a region with nothing in it yet (empty backlog,
 * no search results, no notifications): optional illustration circle, a
 * title, subtle description text (children), and a row of next-step actions.
 * Max 460px wide, centered in its container.
 */
export declare const EmptyState: ForwardRefExoticComponent<EmptyStateProps & RefAttributes<HTMLDivElement>>;

export declare interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /** The headline. Rendered as a real heading so it joins the page outline. */
    title: ReactNode;
    /**
     * Heading level for the title (h2–h6); pick the level that fits the page
     * outline. Defaults to h3.
     */
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    /**
     * Optional illustration slot — a 96px sunken circle. Pass one large glyph
     * span marked `aria-hidden="true"` (or an `<img>` with `alt=""` when
     * purely decorative), or use `glyph` for the common case.
     */
    media?: ReactNode;
    /** Convenience: renders `media` as a single decorative glyph span. */
    glyph?: string;
    /** Centered row of next-step actions — lead with the primary next step. */
    actions?: ReactNode;
}

/**
 * Floating action button — the screen's single primary action, drawn as a
 * raised accent circle (`<button class="fab">`). Use at most one per view.
 *
 * Icon-only FABs (i.e. not `extended` with visible label text) must carry an
 * `aria-label` naming the action — an icon glyph alone is not an accessible
 * name. Always a real `<button>`, so Space/Enter activation and disabled
 * semantics come free.
 */
export declare const Fab: ForwardRefExoticComponent<FabProps & RefAttributes<HTMLButtonElement>>;

export declare interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** 36px variant of the 48px default circle. */
    small?: boolean;
    /** Pill with icon + visible text instead of an icon-only circle. */
    extended?: boolean;
    /** Pins the FAB to the bottom-right corner above the page content. */
    fixed?: boolean;
}

/**
 * Multi-select filter chip: `<label class="chip chip-filter">` wrapping a
 * visually-hidden checkbox; grows a ✓ when checked. Space toggles it —
 * native checkbox semantics, no ARIA roles added on top.
 */
export declare const FilterChip: ForwardRefExoticComponent<FilterChipProps & RefAttributes<HTMLLabelElement>>;

export declare interface FilterChipProps extends SelectionChipProps {
}

/**
 * Floating toast notification (bottom-left in Jira): icon, content block
 * (title/description/actions), and a dismiss button. Children render as the
 * `.flag-description`. Toasts appear asynchronously — give the flag
 * `role="status"` (or `role="alert"` for error flags) so screen readers
 * announce it. The flag is a glass surface: never nest another glass surface
 * (dropdown-menu, modal, navbar, another flag) inside it, and never mount a
 * flag inside one.
 */
export declare const Flag: ForwardRefExoticComponent<FlagProps & RefAttributes<HTMLDivElement>>;

export declare interface FlagProps extends HTMLAttributes<HTMLDivElement> {
    /** Bold tone variant recoloring the whole flag (success/error toasts…). */
    tone?: FlagTone;
    /** Pin to the viewport (bottom-left toast position). */
    fixed?: boolean;
    /** Heading line of the toast. */
    title: string;
    /** Optional leading icon block (e.g. an `<IssueType>` square). */
    icon?: ReactNode;
    /** Row of action links under the description. */
    actions?: ReactNode;
    /** When set, renders the trailing × dismiss button wired to this handler. */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /** Accessible name for the dismiss button (its content is just ×). */
    dismissLabel?: string;
}

export declare type FlagTone = "info" | "warning" | "error" | "success" | "discovery";

/**
 * One checkbox/radio row (`.form-check`): a `.form-check-input` followed by
 * its text label. `className` styles the wrapper row; all other props land on
 * the native input, so keyboard and AT behavior stay native.
 */
export declare const FormCheck: ForwardRefExoticComponent<FormCheckProps & RefAttributes<HTMLInputElement>>;

export declare interface FormCheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    /** Control kind; radios in one group share a `name`. */
    type?: "checkbox" | "radio";
    /** Input id — the row label points at it via `for`, making it clickable. */
    id: string;
    /** Text label rendered after the input. A control without one has no accessible name. */
    label?: ReactNode;
}

/**
 * Text-style input skin (`<input class="form-control">`). Must have an
 * associated label (`id` + `FormLabel htmlFor`), or `aria-label` when a
 * visible label is genuinely impossible — placeholder text is not a label.
 */
export declare const FormControl: ForwardRefExoticComponent<FormControlProps & RefAttributes<HTMLInputElement>>;

declare interface FormControlModifierProps {
    /** Reduced height for dense surfaces. */
    compact?: boolean;
    /** Invisible chrome until hovered/focused (inline-edit style). */
    subtle?: boolean;
    /** Danger border; also sets `aria-invalid="true"`. */
    invalid?: boolean;
}

export declare interface FormControlProps extends FormControlModifierProps, InputHTMLAttributes<HTMLInputElement> {
}

/**
 * Form field stack (`.form-group`): wraps one field — label + control +
 * help/error text — and provides vertical rhythm. Do not nest form groups.
 */
export declare const FormGroup: ForwardRefExoticComponent<FormGroupProps & RefAttributes<HTMLElement>>;

export declare interface FormGroupProps extends HTMLAttributes<HTMLElement> {
    /** Root element; use `fieldset` for grouped controls (radios, checks). */
    as?: "div" | "fieldset";
}

/**
 * `<label class="form-label">` above a control. Always associate it with its
 * control via `htmlFor`/`id` unless it wraps the control.
 */
export declare const FormLabel: ForwardRefExoticComponent<FormLabelProps & RefAttributes<HTMLLabelElement>>;

export declare interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * Appends the visual `.required` asterisk. Visual only — also set the
     * `required` attribute on the control itself.
     */
    required?: boolean;
}

/**
 * Native `<select class="form-select">` skinned with a chevron. Must have an
 * associated label. Prefer this over custom dropdowns for form input — it is
 * free keyboard/AT support.
 */
export declare const FormSelect: ForwardRefExoticComponent<FormSelectProps & RefAttributes<HTMLSelectElement>>;

export declare interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
}

/** Help text below a control (`.form-text`). */
export declare const FormText: ForwardRefExoticComponent<FormTextProps & RefAttributes<HTMLSpanElement>>;

/** Textarea flavour of the `.form-control` skin (grows, resize vertical). */
export declare const FormTextArea: ForwardRefExoticComponent<FormTextAreaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface FormTextAreaProps extends FormControlModifierProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export declare interface FormTextProps extends HTMLAttributes<HTMLSpanElement> {
}

/**
 * A compact meter for one bounded quantity — quota consumed, disk used, rate
 * limit spent (`<span class="gauge">`): a framed box whose block-end edge is
 * a 4px bar graph, with the number printed above the bar so the same fact is
 * carried twice. Name every gauge (`aria-label`/`aria-labelledby`) — the role
 * does not infer a name from the value text. Put it INSIDE a `<td>`, never on
 * one. For progress toward completion use `.progress` or Ring.
 */
export declare const Gauge: ForwardRefExoticComponent<GaugeProps & RefAttributes<HTMLSpanElement>>;

export declare type GaugeFill = "neutral" | "success" | "warning" | "danger";

export declare interface GaugeProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * The quantity in the 0..1 range — drives the `--value` custom property and
     * is also expressed as `aria-valuenow` on the 0..100 scale. Ignored when
     * `unknown`. Out-of-range and malformed values render an empty fill, never
     * full.
     */
    value?: number;
    /**
     * Redundant hue on top of the bar length; omit for the accent fill. The bar
     * length and the printed number carry the meaning — hue is an accelerator.
     */
    fill?: GaugeFill;
    /**
     * Not observed: replaces the 4px band with a 1px rule, dashes the frame,
     * and renders `role="img"` with NO `aria-valuenow` (a meter must claim a
     * value). Give it an `aria-label` such as "Week quota: not observed".
     */
    unknown?: boolean;
    /** Threshold tick position (0..1) — renders a `.gauge-limit`. Omit to draw nothing. */
    limit?: number;
    /**
     * The reading as text for `.gauge-value` (e.g. "82%") — mandatory, the
     * number carries the meaning. Defaults to an em dash when `unknown`.
     */
    children?: React.ReactNode;
}

/**
 * Marketing page-topper: a centered column with a display-size title, a
 * measured lede paragraph, and a CTA row. One hero per page, and its title
 * is the h1. For in-app empty regions use `.empty-state` instead — heroes
 * belong to marketing/docs surfaces.
 */
export declare const Hero: ForwardRefExoticComponent<HeroProps & RefAttributes<HTMLElement>>;

/**
 * Accent-colored run inside the title. Decoration, not emphasis: it must
 * restate or color-amplify a word, never carry meaning that would be lost
 * without the color.
 */
export declare const HeroAccent: ForwardRefExoticComponent<HeroAccentProps & RefAttributes<HTMLSpanElement>>;

export declare interface HeroAccentProps extends HTMLAttributes<HTMLSpanElement> {
}

/** Centered CTA row with 12px gaps, wrapping allowed — typically a stadium primary pill next to a subtle link. */
export declare const HeroActions: ForwardRefExoticComponent<HeroActionsProps & RefAttributes<HTMLDivElement>>;

export declare interface HeroActionsProps extends HTMLAttributes<HTMLDivElement> {
}

/** Supporting paragraph: max-width 640px, 20px/30px, subtle. */
export declare const HeroLede: ForwardRefExoticComponent<HeroLedeProps & RefAttributes<HTMLParagraphElement>>;

export declare interface HeroLedeProps extends HTMLAttributes<HTMLParagraphElement> {
}

export declare interface HeroProps extends HTMLAttributes<HTMLElement> {
    /** Root element; a hero is normally the first `section`/`header` of a marketing/docs page. */
    as?: "section" | "div" | "header";
    /** Faint hairline grid backdrop that fades radially behind the content. */
    grid?: boolean;
}

/** The display headline (68px/76px, semibold, max-width 15ch); the class zeroes its margin. */
export declare const HeroTitle: ForwardRefExoticComponent<HeroTitleProps & RefAttributes<HTMLHeadingElement>>;

export declare interface HeroTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Heading element — the hero title should be the page's `h1`. */
    as?: "h1" | "h2" | "h3";
}

/**
 * In-place view/edit swap for a single field value (`.inline-edit`), zero
 * JS: a visually-hidden checkbox drives the swap — clicking the read view
 * checks it and reveals the editor (a `.form-control` plus compact
 * Save/Cancel buttons). The root is a `<form>`, so Cancel (`type="reset"`)
 * unchecks the toggle AND reverts the field, and Save submits — all platform
 * behavior. The pencil affordance is CSS-only; the checkbox `label` carries
 * that meaning for AT.
 */
export declare const InlineEdit: ForwardRefExoticComponent<InlineEditProps & RefAttributes<HTMLFormElement>>;

export declare interface InlineEditProps extends FormHTMLAttributes<HTMLFormElement> {
    /**
     * Accessible name for the visually-hidden mode-toggle checkbox — name it
     * for what it edits (e.g. "Edit summary"). It is the keyboard entry point:
     * Tab to it, Space opens the editor.
     */
    label: string;
    /** Current field value: shown in the read view and as the editor's default. */
    value: string;
    /** `name` attribute on the editor input (form submission carries the value). */
    name?: string;
    /**
     * Accessible name for the editor input itself — name it after the field
     * (e.g. "Summary").
     */
    inputLabel?: string;
    /** Renders the editor as a growing textarea instead of a text input. */
    multiline?: boolean;
    /** Id for the toggle checkbox / view label pair; auto-generated if omitted. */
    toggleId?: string;
    /** Confirm button content. */
    saveLabel?: ReactNode;
    /** Cancel button content. */
    cancelLabel?: ReactNode;
}

/**
 * Error text (`.invalid-feedback`). Pair with `invalid` on the control and
 * link it via `aria-describedby` pointing at this element's `id`.
 */
export declare const InvalidFeedback: ForwardRefExoticComponent<InvalidFeedbackProps & RefAttributes<HTMLSpanElement>>;

export declare interface InvalidFeedbackProps extends HTMLAttributes<HTMLSpanElement> {
}

/**
 * A single issue on a Kanban board: summary text (children) plus a meta row
 * of issue-type icon, key, badge/lozenge, and avatar. Lives inside
 * `.board-column-cards`; consecutive issue-cards space themselves 8px apart.
 * An independent root — never nested inside a `.card`.
 */
export declare const IssueCard: ForwardRefExoticComponent<IssueCardProps & RefAttributes<HTMLDivElement>>;

export declare interface IssueCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Issue-type square shown first in the meta row. */
    type?: IssueTypeName;
    /** Accessible name for the type square; defaults to the capitalized type. */
    typeLabel?: string;
    /** The issue identifier (e.g. "LOZ-42"); truncates. */
    issueKey?: string;
    /**
     * Extra meta row content after the type and key — badges/lozenges first,
     * the `.avatar` last (it right-aligns via `margin-left: auto`).
     */
    meta?: ReactNode;
}

/**
 * 16px colored square standing in for an issue-type glyph icon
 * (story/bug/task/epic). Fixed categorical colors, deliberately not
 * accent-driven. Used in issue-card meta rows, table cells, and inline next
 * to titles.
 */
export declare const IssueType: ForwardRefExoticComponent<IssueTypeProps & RefAttributes<HTMLSpanElement>>;

export declare type IssueTypeName = "story" | "bug" | "task" | "epic";

export declare interface IssueTypeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Issue type — sets the mandatory fixed categorical color variant. */
    type: IssueTypeName;
    /**
     * Accessible name ("Bug", "Story"…). Provide it whenever the type is not
     * stated in nearby text; omit it when the square is purely decorative next
     * to visible text (the square then renders `aria-hidden`).
     */
    label?: string;
}

/** Navigation styled as a button (`<a class="btn">`). For actions, use Button. */
export declare const LinkButton: ForwardRefExoticComponent<LinkButtonProps & RefAttributes<HTMLAnchorElement>>;

export declare interface LinkButtonProps extends ButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
}

/**
 * List of tiles (Material ListTile equivalent): rows of optional leading
 * icon/avatar, a title with optional 12px subtitle, and optional trailing meta
 * (lozenge, count, chevron). Two-line height is automatic via
 * `:has(.list-item-subtitle)` — no extra class needed.
 */
export declare const List: ForwardRefExoticComponent<ListProps & RefAttributes<HTMLElement>>;

/**
 * Always-open listbox (`<ul class="listbox" role="listbox">`): a static list
 * styled like an open picker panel, for pick-lists that stay visible
 * (sidebars, transfer lists, command palettes). Purely presentational +
 * ARIA — it ships no keyboard behavior; if users change the selection you
 * must script focus management and `aria-selected` updates yourself. For
 * plain form input prefer the native `Select`.
 */
export declare const Listbox: ForwardRefExoticComponent<ListboxProps & RefAttributes<HTMLUListElement>>;

/**
 * Option row (`<li class="listbox-option" role="option">`). Selection is
 * conveyed twice — the `.selected` class for styling and `aria-selected` for
 * AT — and this component keeps the two in sync.
 */
export declare const ListboxOption: ForwardRefExoticComponent<ListboxOptionProps & RefAttributes<HTMLLIElement>>;

export declare interface ListboxOptionProps extends LiHTMLAttributes<HTMLLIElement> {
    /** Chosen row: sets the `.selected` class and keeps `aria-selected` in sync. */
    selected?: boolean;
    /** Inert row: sets the `.disabled` class and `aria-disabled="true"`. */
    disabled?: boolean;
}

export declare interface ListboxProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * Accessible name for the listbox (`aria-label`). Always name it — pass
     * this, or `aria-labelledby` pointing at a visible caption.
     */
    label?: string;
}

export declare type ListElement = "ul" | "ol" | "div" | "nav";

/** Static row tile: `<li class="list-item">`. For interactive rows use ListItemLink / ListItemButton inside a plain `<li>`. */
export declare const ListItem: ForwardRefExoticComponent<ListItemProps & RefAttributes<HTMLLIElement>>;

/** Interactive action row: `<button class="list-item">` — place it inside a plain `<li>`. */
export declare const ListItemButton: ForwardRefExoticComponent<ListItemButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ListItemButtonProps extends ListItemStateProps, ButtonHTMLAttributes<HTMLButtonElement> {
}

/** Flexible middle column stacking a title over an optional subtitle; both truncate. */
export declare const ListItemContent: ForwardRefExoticComponent<ListItemContentProps & RefAttributes<HTMLSpanElement>>;

export declare interface ListItemContentProps extends HTMLAttributes<HTMLSpanElement> {
}

/** Leading slot (icon, avatar, checkbox), flex-shrink: 0. */
export declare const ListItemLeading: ForwardRefExoticComponent<ListItemLeadingProps & RefAttributes<HTMLSpanElement>>;

export declare interface ListItemLeadingProps extends HTMLAttributes<HTMLSpanElement> {
}

/** Interactive navigation row: `<a class="list-item">` — place it inside a plain `<li>`. */
export declare const ListItemLink: ForwardRefExoticComponent<ListItemLinkProps & RefAttributes<HTMLAnchorElement>>;

export declare interface ListItemLinkProps extends ListItemStateProps, AnchorHTMLAttributes<HTMLAnchorElement> {
}

export declare interface ListItemProps extends ListItemStateProps, LiHTMLAttributes<HTMLLIElement> {
}

declare interface ListItemStateProps {
    /**
     * Marks the chosen row (selected-bg/selected-text). Color-only — pair it
     * with `aria-current` (navigation) or `aria-selected` (selection widgets).
     */
    selected?: boolean;
}

/** Second line, 12px text-subtle; its presence bumps the row to the two-line height. */
export declare const ListItemSubtitle: ForwardRefExoticComponent<ListItemSubtitleProps & RefAttributes<HTMLSpanElement>>;

export declare interface ListItemSubtitleProps extends HTMLAttributes<HTMLSpanElement> {
}

/** First line of the row. */
export declare const ListItemTitle: ForwardRefExoticComponent<ListItemTitleProps & RefAttributes<HTMLSpanElement>>;

export declare interface ListItemTitleProps extends HTMLAttributes<HTMLSpanElement> {
}

/** Trailing slot for meta text, lozenges, or a chevron; text-subtle, flex-shrink: 0. */
export declare const ListItemTrailing: ForwardRefExoticComponent<ListItemTrailingProps & RefAttributes<HTMLSpanElement>>;

export declare interface ListItemTrailingProps extends HTMLAttributes<HTMLSpanElement> {
}

export declare interface ListProps extends HTMLAttributes<HTMLElement> {
    /** Root element; keep a real `ul`/`ol` (with `li` rows) so item count and position are announced. */
    as?: ListElement;
    /** Separator border between rows. */
    divided?: boolean;
    /** Dense rows (32px one-line / 48px two-line min-heights). */
    compact?: boolean;
}

/**
 * The signature Jira-style status pill. Purely presentational text; the label
 * itself carries the state, color is never the only signal.
 */
export declare const Lozenge: ForwardRefExoticComponent<LozengeProps & RefAttributes<HTMLSpanElement>>;

export declare const LOZENGE_THEME_DEFAULTS: LozengeTheme;

export declare interface LozengeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Workflow status — sets the mandatory color variant. */
    status: LozengeStatus;
    /** Bold (solid background) emphasis. */
    bold?: boolean;
}

export declare type LozengeStatus = "default" | "inprogress" | "moved" | "new" | "removed" | "success";

/**
 * The Lozenge runtime theme axes. Everything routes through one attribute and
 * four numeric custom properties on the document root — no rebuild, animatable.
 */
export declare interface LozengeTheme {
    /** Color scheme: "auto" defers to `prefers-color-scheme`. */
    scheme: "auto" | "light" | "dark";
    /** Contrast dial, −1 (reduced) … +1 (more). Maps to `--lz-contrast`. */
    contrast: number;
    /** Accent hue in OKLCH degrees. Jira blue is the resting position. Maps to `--lz-accent-hue`. */
    accentHue: number;
    /** Accent chroma multiplier, 0 … 1.4. Maps to `--lz-accent-chroma`. */
    accentChroma: number;
    /** Glass materials amount, 0 (solid) … 1 (frosted). Maps to `--lz-glass`. */
    glass: number;
}

declare interface LozengeThemeContextValue {
    theme: LozengeTheme;
    /** Merge a partial update into the current theme. */
    setTheme: (patch: Partial<LozengeTheme>) => void;
    /** Return every axis to its resting position. */
    resetTheme: () => void;
}

/**
 * Holds the theme axes as React state and mirrors them onto the document root,
 * where the Lozenge stylesheet resolves them at runtime. Read and drive the
 * axes from anywhere with `useLozengeTheme()`.
 */
export declare function LozengeThemeProvider({ defaultTheme, root, children, }: LozengeThemeProviderProps): JSX.Element;

export declare interface LozengeThemeProviderProps {
    /** Initial axis values; merged over the defaults. */
    defaultTheme?: Partial<LozengeTheme>;
    /** Element the axes are written to. Defaults to `document.documentElement`. */
    root?: HTMLElement;
    children?: ReactNode;
}

/**
 * The wide marketing-nav panel (`<nav popover class="mega-menu">`) opened from
 * a navbar item, zero JS: a MegaMenuTrigger opens this popover sibling — a
 * glass surface of MegaMenuGroup columns. The platform supplies open/close,
 * light-dismiss, Esc, and the top layer. Render it OUTSIDE the glass navbar,
 * directly adjacent as a sibling — glass surfaces never nest. Honest
 * semantics: this is navigation (`<nav>` + `aria-label`), not
 * `role=menu`/`menuitem`. For action menus use dropdowns or the menubar —
 * mega-menus are navigation.
 */
export declare const MegaMenu: ForwardRefExoticComponent<MegaMenuProps & RefAttributes<HTMLElement>>;

/**
 * One column of the panel grid (`.mega-menu-group`): an optional
 * MegaMenuHeading over MegaMenuItem links. Groups flow in an auto-fit grid
 * (min 200px tracks). Keep groups short — a mega panel is an index of
 * destinations, not a sitemap.
 */
export declare const MegaMenuGroup: ForwardRefExoticComponent<MegaMenuGroupProps & RefAttributes<HTMLDivElement>>;

export declare interface MegaMenuGroupProps extends HTMLAttributes<HTMLDivElement> {
}

/** Uppercase group label (`.mega-menu-heading`), heading-100 style. */
export declare const MegaMenuHeading: ForwardRefExoticComponent<MegaMenuHeadingProps & RefAttributes<HTMLDivElement>>;

export declare interface MegaMenuHeadingProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * A destination link (`<a class="mega-menu-item">`): children render as the
 * `.mega-menu-item-title`, `description` as the one-line
 * `.mega-menu-item-description`.
 */
export declare const MegaMenuItem: ForwardRefExoticComponent<MegaMenuItemProps & RefAttributes<HTMLAnchorElement>>;

export declare interface MegaMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Optional one-line description under the title. */
    description?: ReactNode;
}

export declare interface MegaMenuProps extends HTMLAttributes<HTMLElement> {
    /** The id its trigger's `popovertarget` points at. */
    id: string;
    /** Accessible name for the panel (`aria-label`, required by the contract). */
    label: string;
}

/**
 * Navbar item that opens the panel (`<button class="nav-link">` +
 * `popovertarget`). Place it where a nav link would go, e.g. inside an
 * `<li>` of NavbarNav.
 */
export declare const MegaMenuTrigger: ForwardRefExoticComponent<MegaMenuTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare interface MegaMenuTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** id of the MegaMenu this trigger opens (`popovertarget`). */
    menuId: string;
}

/**
 * Desktop-style menu bar (`<nav class="menubar">` — File/Edit/View with
 * cascading submenus), zero JS. Each MenubarTrigger opens its adjacent
 * MenubarMenu popover; adjacency drives the pressed state via
 * `:has(+ :popover-open)`, so render each trigger immediately followed by its
 * menu. Intentionally NOT `role=menubar` out of the box: without roving focus,
 * honest semantics are a nav of buttons opening menus. Load
 * `/lozenge-sprinkle.js` and add the roles yourself for full ARIA menu
 * semantics.
 */
export declare const Menubar: ForwardRefExoticComponent<MenubarProps & RefAttributes<HTMLElement>>;

/** Separator (`.dropdown-divider`) between item groups inside a MenubarMenu. */
export declare const MenubarDivider: ForwardRefExoticComponent<MenubarDividerProps & RefAttributes<HTMLDivElement>>;

export declare interface MenubarDividerProps extends HTMLAttributes<HTMLDivElement> {
}

/** A menu item (`<button class="dropdown-item">`) inside a MenubarMenu. */
export declare const MenubarItem: ForwardRefExoticComponent<MenubarItemProps & RefAttributes<HTMLButtonElement>>;

export declare interface MenubarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * id of the menu to hide on activation — usually the top-level menu, so the
     * whole chain dismisses (`popovertarget` + `popovertargetaction="hide"`).
     */
    dismisses?: string;
    /**
     * id of the submenu this item opens; adds `.menubar-subtrigger` (chevron).
     * Mutually exclusive with `dismisses`.
     */
    opens?: string;
    /** Keyboard shortcut hint, rendered as a trailing `.menubar-kbd`. */
    kbd?: ReactNode;
    /** Marks the current choice (`.selected`). */
    selected?: boolean;
}

/**
 * A popover menu on the `.dropdown-menu` skin. The platform supplies
 * open/close, light-dismiss, Esc, and the top layer.
 */
export declare const MenubarMenu: ForwardRefExoticComponent<MenubarMenuProps & RefAttributes<HTMLDivElement>>;

export declare interface MenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
    /** The id its trigger's `popovertarget` points at. */
    id: string;
    /**
     * Renders the menu as a submenu (`.menubar-submenu`): nest it inside the
     * parent menu's DOM right after its MenubarItem invoker, so opening it keeps
     * the ancestor menu open and it anchors to the inline-end of that item.
     */
    submenu?: boolean;
}

export declare interface MenubarProps extends HTMLAttributes<HTMLElement> {
    /** Accessible name for the menu bar (`aria-label`, required by the contract). */
    label: string;
}

/**
 * Top-level menu trigger (`<button class="menubar-trigger">`). Must be
 * immediately followed by its MenubarMenu sibling.
 */
export declare const MenubarTrigger: ForwardRefExoticComponent<MenubarTriggerProps & RefAttributes<HTMLButtonElement>>;

export declare interface MenubarTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** id of the MenubarMenu this trigger opens (`popovertarget`). */
    menuId: string;
}

/**
 * Inline section message (callout) with a colored edge bar: contextual info,
 * warnings, errors, successes, or discovery announcements embedded in page
 * flow. Tone is conveyed by color only — make the text itself state the
 * severity. Messages inserted dynamically should get `role="status"` (or
 * `role="alert"` for errors). For full-width page-level announcements use
 * Banner; for floating toasts use Flag.
 */
export declare const Message: ForwardRefExoticComponent<MessageProps & RefAttributes<HTMLDivElement>>;

export declare interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    /** Contextual tone — sets the colored edge bar. */
    tone?: MessageTone;
    /** Bold heading line, rendered first. Make it state the severity in text. */
    title?: string;
    /** Row of action links rendered after the body text. */
    actions?: ReactNode;
}

export declare type MessageTone = "info" | "warning" | "error" | "success" | "discovery";

/**
 * Native `<dialog class="modal">`. The platform is the behavior layer: focus
 * trapping, Esc, `::backdrop`, and `method="dialog"` submission all come from
 * the element itself.
 */
export declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDialogElement>>;

export declare const ModalBody: ForwardRefExoticComponent<ModalBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
}

/** Footer as `<form method="dialog">` — buttons inside close the dialog natively. */
export declare const ModalFooter: ForwardRefExoticComponent<ModalFooterProps & RefAttributes<HTMLFormElement>>;

export declare interface ModalFooterProps extends FormHTMLAttributes<HTMLFormElement> {
}

export declare const ModalHeader: ForwardRefExoticComponent<ModalHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
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

export declare type ModalSize = "small" | "medium" | "large" | "xlarge" | "fullscreen";

/**
 * Sticky top navigation bar (`<nav class="navbar">`): brand, horizontal nav
 * links, and a right-aligned actions cluster. A frosted-glass surface when
 * materials are enabled — use exactly one per page as the global app header,
 * and never nest another glass surface (dropdown-menu, flag, modal) inside it.
 * When the page has more than one `<nav>` landmark, pass `aria-label`.
 */
export declare const Navbar: ForwardRefExoticComponent<NavbarProps & RefAttributes<HTMLElement>>;

/**
 * Right-aligned cluster (`.navbar-actions`, margin-left:auto) for buttons,
 * search, and the user avatar.
 */
export declare const NavbarActions: ForwardRefExoticComponent<NavbarActionsProps & RefAttributes<HTMLDivElement>>;

export declare interface NavbarActionsProps extends HTMLAttributes<HTMLDivElement> {
}

/** Logo/product link (`<a class="navbar-brand">`), typically the first child. */
export declare const NavbarBrand: ForwardRefExoticComponent<NavbarBrandProps & RefAttributes<HTMLAnchorElement>>;

export declare interface NavbarBrandProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

/**
 * The horizontal link list (`<ul class="navbar-nav">`). Children are `<li>`
 * elements each containing a NavLink.
 */
export declare const NavbarNav: ForwardRefExoticComponent<NavbarNavProps & RefAttributes<HTMLUListElement>>;

export declare interface NavbarNavProps extends HTMLAttributes<HTMLUListElement> {
}

export declare interface NavbarProps extends HTMLAttributes<HTMLElement> {
    /** Bold accent-colored version (`.navbar-primary`). */
    primary?: boolean;
}

/** A navbar navigation link (`<a class="nav-link">`). */
export declare const NavLink: ForwardRefExoticComponent<NavLinkProps & RefAttributes<HTMLAnchorElement>>;

export declare interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Marks the current page: adds `.active` and `aria-current="page"`. */
    active?: boolean;
}

/**
 * Non-interactive `<span class="page-ellipsis">` standing in for an elided
 * page range — a plain span, so it is skipped in tab order. Never a PageLink.
 */
export declare const PageEllipsis: ForwardRefExoticComponent<PageEllipsisProps & RefAttributes<HTMLSpanElement>>;

export declare interface PageEllipsisProps extends HTMLAttributes<HTMLSpanElement> {
}

/**
 * A page button (`<a class="page-link">`). Arrow-only prev/next links need an
 * `aria-label` ("Previous page" / "Next page").
 */
export declare const PageLink: ForwardRefExoticComponent<PageLinkProps & RefAttributes<HTMLAnchorElement>>;

export declare interface PageLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Marks the current page — also sets `aria-current="page"`. */
    active?: boolean;
    /** Unavailable link (e.g. prev on page 1) — also sets `aria-disabled`. */
    disabled?: boolean;
}

/**
 * Page navigation for long result sets (`<nav class="pagination">`): a flex
 * row of 32px `PageLink` buttons with previous/next arrows and an optional
 * `PageEllipsis` marking elided ranges. Use under tables and search results.
 */
export declare const Pagination: ForwardRefExoticComponent<PaginationProps & RefAttributes<HTMLElement>>;

export declare interface PaginationProps extends HTMLAttributes<HTMLElement> {
    /** Accessible name for the `<nav>` landmark. */
    label?: string;
}

/**
 * Marketing promo/news tile: a 4:3 media zone over a saturated
 * family-colored body carrying a kicker pill, an optional meta line, a
 * display title, and an arrow CTA that stretches across the whole card.
 * Loud and self-linking — for marketing/docs surfaces, not app work views.
 * Fluid width and full height; size it from your grid.
 */
export declare const Promo: ForwardRefExoticComponent<PromoProps & RefAttributes<HTMLElement>>;

/** The content column: kicker, meta, title, CTA. The CTA pins to the bottom so tiles in a row stay aligned. */
export declare const PromoBody: ForwardRefExoticComponent<PromoBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface PromoBodyProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * The arrow CTA link. It stretches over the whole card via `::before`, so it
 * is the card's only interactive element — put secondary actions outside the
 * tile. When the text is generic ("Read now"), give an `aria-label` carrying
 * the title ("Read now: <title>").
 */
export declare const PromoCta: ForwardRefExoticComponent<PromoCtaProps & RefAttributes<HTMLAnchorElement>>;

export declare interface PromoCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

/** Content-type pill (Event, Podcast…). Author in normal case — CSS uppercases it. */
export declare const PromoKicker: ForwardRefExoticComponent<PromoKickerProps & RefAttributes<HTMLSpanElement>>;

export declare interface PromoKickerProps extends HTMLAttributes<HTMLSpanElement> {
}

/**
 * 4:3 media zone tinted with the family's subtle background; drop in an
 * `<img>` (object-fit cover, `alt=""` when decorative). Omit for a
 * text-only tile.
 */
export declare const PromoMedia: ForwardRefExoticComponent<PromoMediaProps & RefAttributes<HTMLDivElement>>;

export declare interface PromoMediaProps extends HTMLAttributes<HTMLDivElement> {
}

/** Meta line (date · location · runtime): spans of text, optional inline 16px currentColor svg icons. */
export declare const PromoMeta: ForwardRefExoticComponent<PromoMetaProps & RefAttributes<HTMLDivElement>>;

export declare interface PromoMetaProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface PromoProps extends HTMLAttributes<HTMLElement> {
    /** Root element; `li` when tiles form a real list. */
    as?: "div" | "article" | "li";
    /** Color family for the media tint and saturated body. */
    tone?: PromoTone;
}

/** Display title (heading 500 scale). */
export declare const PromoTitle: ForwardRefExoticComponent<PromoTitleProps & RefAttributes<HTMLElement>>;

export declare interface PromoTitleProps extends HTMLAttributes<HTMLElement> {
    /** A plain `div` or a real `h2`/`h3` — the class zeroes the margin. */
    as?: "div" | "h2" | "h3";
}

export declare type PromoTone = "info" | "warning" | "error" | "success" | "discovery";

/**
 * Navigation rail (`<nav class="rail">`): a compact 72px vertical strip of
 * top-level destinations for tablet/desktop, each item an icon over an 11px
 * label with the same pill indicator as the bottom nav. It is the compact form
 * of the sidebar — swap between them at a breakpoint rather than showing both.
 * When the page has more than one `<nav>` landmark, pass `aria-label`.
 */
export declare const Rail: ForwardRefExoticComponent<RailProps & RefAttributes<HTMLElement>>;

/**
 * Optional trailing section (`.rail-bottom`, margin-block-start:auto) pushed
 * to the rail's end for settings/profile items.
 */
export declare const RailBottom: ForwardRefExoticComponent<RailBottomProps & RefAttributes<HTMLDivElement>>;

export declare interface RailBottomProps extends HTMLAttributes<HTMLDivElement> {
}

/** Optional slot (`.rail-fab`) at the top of the rail for the primary action. */
export declare const RailFab: ForwardRefExoticComponent<RailFabProps & RefAttributes<HTMLDivElement>>;

export declare interface RailFabProps extends HTMLAttributes<HTMLDivElement> {
}

/** One 56px-tall destination (`<a class="rail-item">`), stacked in the rail. */
export declare const RailItem: ForwardRefExoticComponent<RailItemProps & RefAttributes<HTMLAnchorElement>>;

export declare interface RailItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** 20px icon slot content (inline SVG, `aria-hidden` — decorative). */
    icon: ReactNode;
    /** 11px label under the icon. If omitted, give the item an `aria-label`. */
    label?: ReactNode;
    /**
     * Marks the current destination (exactly one per rail): adds `.active` and
     * `aria-current="page"` (required by the contract).
     */
    active?: boolean;
}

export declare interface RailProps extends HTMLAttributes<HTMLElement> {
}

/**
 * Dual-thumb range (`.range-slider`), zero JS: exactly two stacked `Slider`
 * children (min then max — document order determines the fill mask
 * direction). Each thumb keeps its own tab stop and ARIA slider semantics —
 * give each its own `aria-label` ("Minimum" / "Maximum"). The app enforces
 * min <= max on submit; the paint is agnostic.
 */
export declare const RangeSlider: ForwardRefExoticComponent<RangeSliderProps & RefAttributes<HTMLDivElement>>;

export declare interface RangeSliderProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Determinate circular progress (`<div class="ring">`): a conic-gradient
 * donut — no JS, no SVG. `role="progressbar"` and `aria-valuenow` are built
 * in; name it via `aria-label`/`aria-labelledby` when no visible text labels
 * it. For indeterminate progress use `.spinner`; for linear, `.progress`.
 */
export declare const Ring: ForwardRefExoticComponent<RingProps & RefAttributes<HTMLDivElement>>;

export declare interface RingProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Progress in the 0..1 range — drives the `--value` custom property and is
     * also expressed as `aria-valuenow` on the 0..100 scale (same fact, two
     * scales).
     */
    value: number;
    /** 24px (`sm`) / 48px (`lg`); omit for the 32px default. */
    size?: RingSize;
    /** Recolors the fill only — pair with visible text nearby, since color alone must not carry meaning. */
    status?: RingStatus;
    /**
     * Optional absolute-centered label (e.g. "60%") in the donut hole —
     * supplementary for sighted users; too cramped on `size="sm"`.
     */
    label?: string;
}

export declare type RingSize = "sm" | "lg";

export declare type RingStatus = "success" | "danger";

/**
 * Compact search input (`.search-field`): a leading magnifier icon (CSS
 * mask) around a native `<input type="search">`. `className` styles the
 * wrapper; all other props land on the input. Search fields usually have no
 * visible label, so pass `aria-label` (e.g. "Search issues") — placeholder
 * text is not a label. `type="search"` gives AT the search context and
 * native clear behavior.
 */
export declare const SearchField: ForwardRefExoticComponent<SearchFieldProps & RefAttributes<HTMLInputElement>>;

export declare interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * Optional keyboard-shortcut hint chip ("/", "⌘K") rendered after the
     * input. Purely visual — register the actual shortcut in your app.
     */
    shortcut?: string;
}

/**
 * Segmented button on a native radio group (`<fieldset class="segmented">`) —
 * zero JS; arrow keys are the platform's. Children are `SegmentedOption`s,
 * each rendering a visually-hidden radio plus its label segment. Keyboard
 * support is native radio-group behavior — Tab enters the group, arrow keys
 * move (and activate) the selection; no extra ARIA roles on the radios.
 * React adds an optional controlled convenience via `value`/`onValueChange`.
 */
export declare const Segmented: ForwardRefExoticComponent<SegmentedProps & RefAttributes<HTMLFieldSetElement>>;

/**
 * One segment: a visually-hidden `<input type="radio">` immediately followed
 * by its `<label>` (the CSS selects `input:checked + label`). Must be a direct
 * child of `Segmented`. Extra props (and `ref`) go to the radio input;
 * `className` merges onto it too. Disable a segment via `disabled`.
 */
export declare const SegmentedOption: ForwardRefExoticComponent<SegmentedOptionProps & RefAttributes<HTMLInputElement>>;

export declare interface SegmentedOptionProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "value" | "children"> {
    /** This segment's value within the group. */
    value: string;
    /** Visible segment label content. */
    children: ReactNode;
}

export declare interface SegmentedProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "name"> {
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
 * Customizable select (`<select class="form-select select">`): a native
 * select progressively enhanced with `appearance: base-select`. Supporting
 * browsers render the picker as a styled overlay panel; others keep the
 * fully native picker with the `.form-select` skin. No extra markup, no JS —
 * semantics, keyboard, and AT behavior stay native in both modes. Must have
 * an associated label (`id` + `htmlFor`) or `aria-label`. Children are
 * native `<option>` (optionally inside `<optgroup>`).
 */
export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>;

declare interface SelectionChipProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
    /** Radio/checkbox group name. Give each choice group a distinct name. */
    name?: string;
    /** Submitted value of the underlying input. */
    value?: string;
    /** Controlled checked state of the underlying input. */
    checked?: boolean;
    /** Uncontrolled initial checked state. */
    defaultChecked?: boolean;
    /** Change handler for the underlying input. */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** Disables the input (never the label) — the chip grays out via `:has()`. */
    disabled?: boolean;
    /** Visible label text, rendered in the `<span>` the ✓ indicator targets. */
    children?: ReactNode;
}

export declare interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    /** Danger border; also sets `aria-invalid="true"`. */
    invalid?: boolean;
}

/**
 * Bottom sheet on a native `<dialog>` (Material BottomSheet equivalent): a
 * bottom-anchored glass surface sliding up over a blanket backdrop. Use for
 * mobile-friendly action lists, share targets, and quick forms. The platform
 * is the behavior layer: focus trapping, Esc, `::backdrop`, and
 * `method="dialog"` submission come from the element itself. Never nest
 * another glass surface (modal, drawer, flag, another sheet) inside it.
 */
export declare const Sheet: ForwardRefExoticComponent<SheetProps & RefAttributes<HTMLDialogElement>>;

/** The scrolling content region. */
export declare const SheetBody: ForwardRefExoticComponent<SheetBodyProps & RefAttributes<HTMLDivElement>>;

export declare interface SheetBodyProps extends HTMLAttributes<HTMLDivElement> {
}

/** Footer as `<form method="dialog">` — buttons inside close the sheet natively. */
export declare const SheetFooter: ForwardRefExoticComponent<SheetFooterProps & RefAttributes<HTMLFormElement>>;

export declare interface SheetFooterProps extends FormHTMLAttributes<HTMLFormElement> {
}

/** Title strip below the handle: `.sheet-title` plus an optional trailing control. */
export declare const SheetHeader: ForwardRefExoticComponent<SheetHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface SheetProps extends DialogHTMLAttributes<HTMLDialogElement> {
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
 * Project sidebar navigation (`<aside class="sidebar">`): a fixed-width
 * vertical column with a project header, section labels, and SidebarItem
 * links. Use SidebarGroup for collapsible sections with zero-JS
 * exclusive-accordion behavior. Wrap link runs in `<nav>` (labelled) for
 * landmark navigation.
 */
export declare const Sidebar: ForwardRefExoticComponent<SidebarProps & RefAttributes<HTMLElement>>;

/**
 * Collapsible sidebar section (`<details class="sidebar-group">`) built on
 * native details/summary — expand/collapse semantics and keyboard support come
 * from the platform. Add `open` to the group containing the current page.
 */
export declare const SidebarGroup: ForwardRefExoticComponent<SidebarGroupProps & RefAttributes<HTMLDetailsElement>>;

export declare interface SidebarGroupProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    /** Section label, rendered as the `<summary class="sidebar-section">`. */
    label: ReactNode;
    /**
     * Native `<details name>`; sibling groups sharing a name form an exclusive
     * accordion with zero JS. Defaults to `"sidebar"`; pass `name=""` to allow
     * multiple open sections.
     */
    name?: string;
}

/**
 * Project identity row (`.sidebar-header`): a square avatar plus a min-width:0
 * wrapper holding SidebarTitle and SidebarSubtitle (both truncate).
 */
export declare const SidebarHeader: ForwardRefExoticComponent<SidebarHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

/** Navigation link (`<a class="sidebar-item">`). */
export declare const SidebarItem: ForwardRefExoticComponent<SidebarItemProps & RefAttributes<HTMLAnchorElement>>;

export declare interface SidebarItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Marks the current view: adds `.active` and `aria-current="page"`. */
    active?: boolean;
}

export declare interface SidebarProps extends HTMLAttributes<HTMLElement> {
}

/**
 * Uppercase section label (`.sidebar-section`) as a plain div. For a
 * collapsible section, use SidebarGroup instead — its `label` renders the
 * summary variant of this class.
 */
export declare const SidebarSection: ForwardRefExoticComponent<SidebarSectionProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
}

/** Truncating secondary line (`.sidebar-subtitle`) inside the header. */
export declare const SidebarSubtitle: ForwardRefExoticComponent<SidebarSubtitleProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarSubtitleProps extends HTMLAttributes<HTMLDivElement> {
}

/** Truncating project name (`.sidebar-title`) inside the header. */
export declare const SidebarTitle: ForwardRefExoticComponent<SidebarTitleProps & RefAttributes<HTMLDivElement>>;

export declare interface SidebarTitleProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Loading placeholder: a sunken rounded rect with a shimmering gradient sweep
 * (`<div class="skeleton">`). Decorative — always rendered with
 * `aria-hidden="true"`; give the region being loaded `aria-busy="true"`.
 * Never put text content inside a skeleton.
 */
export declare const Skeleton: ForwardRefExoticComponent<SkeletonProps & RefAttributes<HTMLDivElement>>;

export declare type SkeletonAvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Vertical stack of `.skeleton-text` lines with prose-like rhythm
 * (`<div class="skeleton-paragraph">`): 8px row gap, final line stops at 60%
 * width so the block reads as a paragraph rather than a box.
 */
export declare const SkeletonParagraph: ForwardRefExoticComponent<SkeletonParagraphProps & RefAttributes<HTMLDivElement>>;

export declare interface SkeletonParagraphProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of `.skeleton-text` lines to stack (the last auto-shortens to 60%). */
    lines?: number;
}

export declare interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /** Shape mimicking the loading content; omit for a plain rect. */
    shape?: SkeletonShape;
    /** For `shape="avatar"`: match the size class of the avatar it stands in for. */
    avatarSize?: SkeletonAvatarSize;
}

export declare type SkeletonShape = "text" | "heading" | "avatar" | "card";

/**
 * Styled native `<input type="range" class="slider">` with a live fill that
 * requires no wiring: dragging, keyboard steps, and programmatic value
 * changes all move it with zero JS. Name the control with a visible
 * `<label htmlFor>` or `aria-label`.
 */
export declare const Slider: ForwardRefExoticComponent<SliderProps & RefAttributes<HTMLInputElement>>;

export declare interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    /** Reduced-height track for dense surfaces (`.slider-compact`). */
    compact?: boolean;
    /**
     * Legacy 4px hairline look (`.slider-thin`). Its fill is driven by an
     * app-set `--value` custom property (0..1) — keep it in sync via `style`
     * or accept an unfilled track. The default chunky slider needs no wiring.
     */
    thin?: boolean;
}

/**
 * Material-style snackbar: a single-line transient notification on the
 * inverted tooltip surface, with an optional inline action. Static in document
 * flow by default (compose into custom stacks); `fixed` pins it bottom-center
 * of the viewport. Children become the `.snackbar-message` text — keep it to
 * one line (it truncates); for richer multi-line toasts use a flag instead.
 * Because snackbars are transient, the action should also be reachable
 * somewhere persistent.
 */
export declare const Snackbar: ForwardRefExoticComponent<SnackbarProps & RefAttributes<HTMLDivElement>>;

/**
 * The snackbar's trailing action as a real `<button class="snackbar-action">`:
 * inherits the tooltip text color, distinguished by underline + semibold.
 */
export declare const SnackbarAction: ForwardRefExoticComponent<SnackbarActionProps & RefAttributes<HTMLButtonElement>>;

export declare interface SnackbarActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export declare interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
    /** Pins the snackbar bottom-center of the viewport (`.snackbar-fixed`). */
    fixed?: boolean;
    /**
     * Live-region role so screen readers announce the asynchronous message.
     * `"status"` by default; use `"alert"` for errors.
     */
    role?: "status" | "alert";
    /** Optional trailing action — use `<SnackbarAction>` (at most one). */
    action?: ReactNode;
}

/**
 * Sprint title strip above a backlog or board: sprint name, date range, and a
 * right-aligned actions cluster.
 */
export declare const SprintHeader: ForwardRefExoticComponent<SprintHeaderProps & RefAttributes<HTMLElement>>;

export declare interface SprintHeaderProps extends HTMLAttributes<HTMLElement> {
    /** Sprint title, rendered as a real heading (`.sprint-name`, h500-style). */
    name: ReactNode;
    /** Heading level for the sprint name, to fit the page outline. */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Date range next to the name (`.sprint-dates`). */
    dates?: ReactNode;
    /**
     * Right-aligned cluster (`.sprint-actions`): total story-point badge, then
     * compact Start/Complete sprint buttons.
     */
    actions?: ReactNode;
    /** Root element tag. */
    as?: "div" | "header";
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
export declare const Stepper: ForwardRefExoticComponent<StepperProps & RefAttributes<HTMLElement>>;

export declare interface StepperProps extends HTMLAttributes<HTMLElement> {
    /**
     * Root element. `"ol"` (default, preferred — step count and position are
     * announced) holds `<li>` steps; `"div"` holds `<details>` steps
     * (`<details>` cannot be a child of `<ol>`). Don't mix flavors.
     */
    as?: "ol" | "div";
}

/**
 * One step. Children become the `.stepper-content` body, hidden unless the
 * step is expanded. Content hidden by a collapsed step is genuinely removed
 * from the accessibility tree — don't put the only path forward (e.g. the
 * submit button) inside a collapsed step.
 */
export declare const StepperStep: ForwardRefExoticComponent<StepperStepProps & RefAttributes<HTMLElement>>;

export declare interface StepperStepProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
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
 * A link-recipe tab: `<li><a class="tab">`. Carries no tab ARIA semantics by
 * itself — add `role="tablist"/"tab"/"tabpanel"` and `aria-selected` if you
 * script the switching. For zero-JS switching, use `Tabset` + `TabsetTab`.
 */
export declare const Tab: ForwardRefExoticComponent<TabProps & RefAttributes<HTMLAnchorElement>>;

/**
 * One pane per tab (`<div class="tab-pane">`), a direct child of `TabPanes`.
 * Inactive panes are `display:none`, so hidden content is correctly removed
 * from the accessibility tree.
 */
export declare const TabPane: ForwardRefExoticComponent<TabPaneProps & RefAttributes<HTMLDivElement>>;

export declare interface TabPaneProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Wrapper whose element children must be ONLY `TabPane`s, in the same order
 * as the tabset's radios — pane visibility is matched by `:nth-child`.
 */
export declare const TabPanes: ForwardRefExoticComponent<TabPanesProps & RefAttributes<HTMLDivElement>>;

export declare interface TabPanesProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface TabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The current tab (`.active` underline). */
    active?: boolean;
    /** Disabled tab — also sets `aria-disabled`. */
    disabled?: boolean;
    /** Props for the wrapping `<li>`. */
    itemProps?: LiHTMLAttributes<HTMLLIElement>;
}

/**
 * Horizontal tab strip with an underline indicator (`class="tabs"`). Two
 * recipes share the skin: a plain link strip (`<ul>` of `Tab`s where YOU wire
 * the switching) and the zero-JS `Tabset`, which switches panes with hidden
 * radio inputs and `:has()` (children are then `TabsetTab`s).
 */
export declare const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLElement>>;

/**
 * CSS-only switching tabs (`<div class="tabset">`): hidden radio inputs
 * inside the `<Tabs as="div">` strip drive which `TabPane` is visible via
 * `:has()` — no JavaScript. Supports at most 8 tabs. The Nth radio shows the
 * Nth pane, so radio order and pane order must correspond exactly. Keyboard
 * support comes from the native radio group (arrow keys switch tab and pane).
 * React adds an optional controlled convenience via `value`/`onValueChange`.
 */
export declare const Tabset: ForwardRefExoticComponent<TabsetProps & RefAttributes<HTMLDivElement>>;

export declare interface TabsetProps extends HTMLAttributes<HTMLDivElement> {
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
 * One tabset tab: a visually-hidden `<input type="radio">` immediately
 * followed by its `<label class="tab">` (the CSS selects
 * `input:checked + .tab`). Must be a direct child of the tabset's
 * `<Tabs as="div">` strip. Extra props (and `ref`) go to the radio input;
 * `className` merges onto the label.
 */
export declare const TabsetTab: ForwardRefExoticComponent<TabsetTabProps & RefAttributes<HTMLInputElement>>;

export declare interface TabsetTabProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "value" | "children"> {
    /** This tab's value within the tabset. */
    value: string;
    /** Visible tab label content. */
    children: ReactNode;
}

export declare interface TabsProps extends HTMLAttributes<HTMLElement> {
    /**
     * Root element. `"ul"` (default) for the link recipe; `"div"` for the strip
     * of a `Tabset`; `"nav"` when the strip is itself a navigation landmark.
     */
    as?: "ul" | "div" | "nav";
}

/**
 * A label/keyword chip, optionally linked and optionally removable
 * (`<span class="tag">`). The chip itself is non-interactive; interactivity
 * lives on the inner link / remove button so it stays keyboard-reachable.
 */
export declare const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<HTMLSpanElement>>;

export declare interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Fully rounded ends. */
    rounded?: boolean;
    /** Wraps the label in an `<a>` so the chip is navigable. */
    href?: string;
    /**
     * Names what the remove button removes (e.g. "Remove frontend", not just
     * "Remove"). Providing it renders a `button.tag-remove` after the label.
     */
    removeLabel?: string;
    /** Click handler for the remove button. */
    onRemove?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Roadmap / Gantt-lite timeline: a CSS grid with a 200px label column plus
 * equal time-period columns. Purely presentational and inline-style-driven:
 * the generating app computes the columns; there is no runtime.
 */
export declare const Timeline: ForwardRefExoticComponent<TimelineProps & RefAttributes<HTMLDivElement>>;

/**
 * Pill bar placed on the period grid via `--start`/`--span` custom
 * properties. Convey the dates in text (bar text content, `title`, or an
 * adjacent table) — placement alone is invisible to assistive tech.
 */
export declare const TimelineBar: ForwardRefExoticComponent<TimelineBarProps & RefAttributes<HTMLDivElement>>;

export declare interface TimelineBarProps extends HTMLAttributes<HTMLDivElement> {
    /** 1-based first period the bar occupies (`--start`). */
    start: number;
    /** Number of periods the bar spans (`--span`); `start + span - 1` must not exceed the timeline's `cols`. */
    span: number;
    /** Accent by default; `done` = success, `risk` = warning. State the status in text too — color is invisible to assistive tech. */
    variant?: TimelineBarVariant;
}

export declare type TimelineBarVariant = "done" | "risk";

/**
 * Subgrid header row: first child cell labels the left column, subsequent
 * cells are period labels — span multiple periods with inline
 * `style={{ gridColumn: "span N" }}`.
 */
export declare const TimelineHeader: ForwardRefExoticComponent<TimelineHeaderProps & RefAttributes<HTMLDivElement>>;

export declare interface TimelineHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * Left-column cell: item name, truncates; lead with an `.issue-type` square
 * (`role="img"` + `aria-label`).
 */
export declare const TimelineLabel: ForwardRefExoticComponent<TimelineLabelProps & RefAttributes<HTMLDivElement>>;

export declare interface TimelineLabelProps extends HTMLAttributes<HTMLDivElement> {
}

export declare interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of equal time periods after the 200px label column (`--lz-timeline-cols`, default 12). */
    cols?: number;
}

/** One subgrid row per item; hover highlights the whole row. */
export declare const TimelineRow: ForwardRefExoticComponent<TimelineRowProps & RefAttributes<HTMLDivElement>>;

export declare interface TimelineRowProps extends HTMLAttributes<HTMLDivElement> {
}

/**
 * iOS-style switch: a `<label class="toggle">` wrapping a visually-hidden
 * checkbox and the drawn `.toggle-slider`. `className` styles the wrapping
 * label; all other props land on the checkbox. The checkbox still needs a
 * text name — pass `aria-label` (e.g. "Send me updates").
 */
export declare const Toggle: ForwardRefExoticComponent<ToggleProps & RefAttributes<HTMLInputElement>>;

export declare interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    /** Larger switch size (`.toggle-lg`). */
    lg?: boolean;
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
export declare function Tooltip({ content, position, children }: TooltipProps): ReactElement<{
    className?: string;
    "data-tooltip"?: string;
}, string | JSXElementConstructor<any>>;

export declare type TooltipPosition = "bottom" | "left" | "right";

export declare interface TooltipProps {
    /** Tooltip text — rendered by CSS from the `data-tooltip` attribute. */
    content: string;
    /** Placement relative to the trigger; omit for the default (above). */
    position?: TooltipPosition;
    /** The single trigger element the attribute is applied to. */
    children: ReactElement<{
        className?: string;
        "data-tooltip"?: string;
    }>;
}

/**
 * Progress tracker / stepper for multi-step flows (`<ol class="tracker">`):
 * an ordered list of TrackerStep children with numbered circle markers joined
 * by connector lines. Purely presentational — the wizard's pages do the
 * actual navigation. A real `<ol>` so step count and position are announced.
 */
export declare const Tracker: ForwardRefExoticComponent<TrackerProps & RefAttributes<HTMLOListElement>>;

export declare interface TrackerProps extends OlHTMLAttributes<HTMLOListElement> {
}

/**
 * One step of a Tracker (`<li class="tracker-step">`). Steps default to
 * upcoming; set `done` on completed steps and `current` on the active one.
 */
export declare const TrackerStep: ForwardRefExoticComponent<TrackerStepProps & RefAttributes<HTMLLIElement>>;

export declare interface TrackerStepProps extends LiHTMLAttributes<HTMLLIElement> {
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
 * Tree view for file/hierarchy browsing built on nested `<details>`: branch
 * nodes are `<details><summary class="tree-item">` with a rotating disclosure
 * triangle, leaf nodes are plain `.tree-item` rows. Branches expand
 * independently. Zero JS.
 */
export declare const Tree: ForwardRefExoticComponent<TreeProps & RefAttributes<HTMLUListElement>>;

/**
 * Branch node: `<li><details><summary class="tree-item">…</summary><ul>…</ul></details></li>`.
 * Children become the nested `<ul>` of child rows (each child a TreeBranch or
 * TreeItem); each nesting level indents 20px.
 */
export declare const TreeBranch: ForwardRefExoticComponent<TreeBranchProps & RefAttributes<HTMLDetailsElement>>;

export declare interface TreeBranchProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    /** Row content for the `<summary class="tree-item">`. */
    label: ReactNode;
    /** Expand the branch initially (native `open` attribute). */
    open?: boolean;
    /** Marks the branch row as the selected one — pair with `aria-current` via `summaryProps`. */
    selected?: boolean;
    /**
     * Stacked (multi-line) row content: the summary becomes
     * `.tree-item.tree-item-block` and `label` is wrapped in a
     * `.tree-item-body` (compose it from TreeItemTitle / TreeItemMeta).
     */
    block?: boolean;
    /** Extra props for the `<summary>` row (e.g. `aria-current`). */
    summaryProps?: HTMLAttributes<HTMLElement>;
}

/**
 * Leaf node: `<li>` wrapping a plain `<span class="tree-item">` (or
 * `<a class="tree-item">` when `href` is given) whose indent aligns with
 * branch labels.
 */
export declare const TreeItem: ForwardRefExoticComponent<TreeItemProps & RefAttributes<HTMLElement>>;

/** Supporting detail line of a `.tree-item-block` row (small, text-subtle). */
export declare const TreeItemMeta: ForwardRefExoticComponent<TreeItemMetaProps & RefAttributes<HTMLSpanElement>>;

export declare interface TreeItemMetaProps extends HTMLAttributes<HTMLSpanElement> {
}

export declare interface TreeItemProps extends AnchorHTMLAttributes<HTMLElement> {
    /** Renders the row as a real link (`<a class="tree-item">`) when it navigates. */
    href?: string;
    /** Marks the selected row (selected-bg/selected-text) — pair with `aria-current`. */
    selected?: boolean;
    /** Stacked (multi-line) row content: adds `.tree-item-block`. */
    block?: boolean;
}

/** First line of a `.tree-item-block` row — reads as the node label. */
export declare const TreeItemTitle: ForwardRefExoticComponent<TreeItemTitleProps & RefAttributes<HTMLSpanElement>>;

export declare interface TreeItemTitleProps extends HTMLAttributes<HTMLSpanElement> {
}

export declare interface TreeProps extends HTMLAttributes<HTMLUListElement> {
    /** Depth guide rail: a separator border down each nested level. */
    railed?: boolean;
}

export declare function useLozengeTheme(): LozengeThemeContextValue;

export { }
