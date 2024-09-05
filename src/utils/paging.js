export function getPageSize() {
  const width = window.innerWidth;
  if (width <= 767) return 1;
  if (width <= 1199) return 2;
  return 4;
}
