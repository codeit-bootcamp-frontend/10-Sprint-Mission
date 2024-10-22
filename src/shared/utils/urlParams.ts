export const createURLSearchParams = (
  params: Record<string, string | number | boolean>
): URLSearchParams => {
  const stringifiedParams: Record<string, string> = {};

  for (const key in params) {
    stringifiedParams[key] = String(params[key]);
  }

  return new URLSearchParams(stringifiedParams);
};
