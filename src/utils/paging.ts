function getPageSize(width: number, sizes: number[]): number {
  if (width <= 767) return sizes[0];
  if (width <= 1199) return sizes[1];
  return sizes[2];
}

export function getBestItemsPageSize(): number {
  const width = window.innerWidth;
  return getPageSize(width, [1, 2, 4]);
}

export function getAllItemsPageSize(): number {
  const width = window.innerWidth;
  return getPageSize(width, [4, 6, 10]);
}

export const LIMIT = 10 as const;
export const DISPLAY_PAGINATION_NUMBER = 5 as const;
