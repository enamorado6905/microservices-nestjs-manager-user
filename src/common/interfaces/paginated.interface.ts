export interface PaginateInterface<T> {
  limit: number;
  page: number;
  nextPage: number | null;
  prevPage: number | null;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  totalDocs: number;
  pagingCounter: number;
  meta: object;
  docs: T[];
}
