export const checkObjectIsEmpty = (obj: Record<string, unknown>): boolean =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const checkEmailValid = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
