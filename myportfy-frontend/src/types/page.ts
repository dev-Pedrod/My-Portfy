export type Page<T> = {
  content: Array<T>,
  last: boolean,
  totalPages: number,
  totalElements: number,
  size: number,
  number: number,
  first: boolean,
  numberOfElements: number,
  empty: boolean,
}
