import {
  PageEllipsis,
  PageLink,
  Pagination,
} from "../../src/components/Pagination";

export const meta = { id: "pagination", title: "Pagination" };

export default function PaginationSection() {
  return (
    <Pagination label="Search results pages">
      <PageLink href="#pagination" disabled aria-label="Previous page">
        ‹
      </PageLink>
      <PageLink href="#pagination">1</PageLink>
      <PageLink href="#pagination" active>
        2
      </PageLink>
      <PageLink href="#pagination">3</PageLink>
      <PageEllipsis />
      <PageLink href="#pagination">9</PageLink>
      <PageLink href="#pagination" aria-label="Next page">
        ›
      </PageLink>
    </Pagination>
  );
}
