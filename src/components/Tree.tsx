import {
  forwardRef,
  type AnchorHTMLAttributes,
  type DetailsHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cx } from "../lib/cx";

export interface TreeProps extends HTMLAttributes<HTMLUListElement> {
  /** Depth guide rail: a separator border down each nested level. */
  railed?: boolean;
}

/**
 * Tree view for file/hierarchy browsing built on nested `<details>`: branch
 * nodes are `<details><summary class="tree-item">` with a rotating disclosure
 * triangle, leaf nodes are plain `.tree-item` rows. Branches expand
 * independently. Zero JS.
 */
export const Tree = forwardRef<HTMLUListElement, TreeProps>(function Tree(
  { railed, className, ...rest },
  ref,
) {
  return (
    <ul
      ref={ref}
      className={cx("tree", railed && "tree-railed", className)}
      {...rest}
    />
  );
});

export interface TreeBranchProps
  extends DetailsHTMLAttributes<HTMLDetailsElement> {
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
 * Branch node: `<li><details><summary class="tree-item">…</summary><ul>…</ul></details></li>`.
 * Children become the nested `<ul>` of child rows (each child a TreeBranch or
 * TreeItem); each nesting level indents 20px.
 */
export const TreeBranch = forwardRef<HTMLDetailsElement, TreeBranchProps>(
  function TreeBranch(
    { label, selected, block, summaryProps, className, children, ...rest },
    ref,
  ) {
    const { className: summaryClassName, ...summaryRest } = summaryProps ?? {};
    return (
      <li>
        <details ref={ref} className={className} {...rest}>
          <summary
            className={cx(
              "tree-item",
              block && "tree-item-block",
              selected && "selected",
              summaryClassName,
            )}
            {...summaryRest}
          >
            {block ? <span className="tree-item-body">{label}</span> : label}
          </summary>
          <ul>{children}</ul>
        </details>
      </li>
    );
  },
);

export interface TreeItemProps extends AnchorHTMLAttributes<HTMLElement> {
  /** Renders the row as a real link (`<a class="tree-item">`) when it navigates. */
  href?: string;
  /** Marks the selected row (selected-bg/selected-text) — pair with `aria-current`. */
  selected?: boolean;
  /** Stacked (multi-line) row content: adds `.tree-item-block`. */
  block?: boolean;
}

/**
 * Leaf node: `<li>` wrapping a plain `<span class="tree-item">` (or
 * `<a class="tree-item">` when `href` is given) whose indent aligns with
 * branch labels.
 */
export const TreeItem = forwardRef<HTMLElement, TreeItemProps>(
  function TreeItem({ href, selected, block, className, ...rest }, ref) {
    const rowClass = cx(
      "tree-item",
      block && "tree-item-block",
      selected && "selected",
      className,
    );
    return (
      <li>
        {href !== undefined ? (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={rowClass}
            {...rest}
          />
        ) : (
          <span
            ref={ref as React.Ref<HTMLSpanElement>}
            className={rowClass}
            {...rest}
          />
        )}
      </li>
    );
  },
);

export interface TreeItemTitleProps extends HTMLAttributes<HTMLSpanElement> {}

/** First line of a `.tree-item-block` row — reads as the node label. */
export const TreeItemTitle = forwardRef<HTMLSpanElement, TreeItemTitleProps>(
  function TreeItemTitle({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("tree-item-title", className)} {...rest} />
    );
  },
);

export interface TreeItemMetaProps extends HTMLAttributes<HTMLSpanElement> {}

/** Supporting detail line of a `.tree-item-block` row (small, text-subtle). */
export const TreeItemMeta = forwardRef<HTMLSpanElement, TreeItemMetaProps>(
  function TreeItemMeta({ className, ...rest }, ref) {
    return (
      <span ref={ref} className={cx("tree-item-meta", className)} {...rest} />
    );
  },
);
