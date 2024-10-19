export const checkObjectIsEmpty = (obj: Record<string, unknown>) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
