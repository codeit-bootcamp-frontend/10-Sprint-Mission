function getPageSize(width, sizes) {
  if (width <= 767) return sizes[0];
  if (width <= 1199) return sizes[1];
  return sizes[2];
}

export function getBestItemsPageSize() {
  const width = window.innerWidth;
  return getPageSize(width, [1, 2, 4]);
}

export function getAllItemsPageSize() {
  const width = window.innerWidth;
  return getPageSize(width, [4, 6, 10]);
}

export const LIMIT = 10;
export const DISPLAY_PAGINATION_NUMBER = 5;
