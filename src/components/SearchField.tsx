import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../lib/cx";

export interface SearchFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional keyboard-shortcut hint chip ("/", "⌘K") rendered after the
   * input. Purely visual — register the actual shortcut in your app.
   */
  shortcut?: string;
}

/**
 * Compact search input (`.search-field`): a leading magnifier icon (CSS
 * mask) around a native `<input type="search">`. `className` styles the
 * wrapper; all other props land on the input. Search fields usually have no
 * visible label, so pass `aria-label` (e.g. "Search issues") — placeholder
 * text is not a label. `type="search"` gives AT the search context and
 * native clear behavior.
 */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField({ shortcut, className, type = "search", ...rest }, ref) {
    return (
      <div className={cx("search-field", className)}>
        <input ref={ref} className="form-control" type={type} {...rest} />
        {shortcut !== undefined && <kbd className="search-kbd">{shortcut}</kbd>}
      </div>
    );
  },
);
