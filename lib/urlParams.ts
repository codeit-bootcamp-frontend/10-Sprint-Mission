export const createURLSearchParams = (
  params: Record<string, string | number | boolean | undefined | null>
): URLSearchParams => {
  const stringifiedParams: Record<string, string> = {};

  for (const key in params) {
    if (params[key] !== undefined && params[key] !== null) {
      stringifiedParams[key] = String(params[key]);
    }
  }

  return new URLSearchParams(stringifiedParams);
};
