import { SearchField } from "../../src/components/SearchField";

export const meta = { id: "search", title: "Search field" };

export default function SearchSection() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 320 }}>
      <SearchField placeholder="Search issues" aria-label="Search issues" />
      <SearchField
        placeholder="Search boards"
        aria-label="Search boards"
        shortcut="/"
      />
      <SearchField
        placeholder="Search everything"
        aria-label="Search everything"
        shortcut="⌘K"
      />
      <SearchField
        placeholder="Search archive"
        aria-label="Search archive"
        disabled
      />
    </div>
  );
}
