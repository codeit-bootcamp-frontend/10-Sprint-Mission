import { useState, useCallback, useEffect } from "react";

export function useQuery<Params extends object, Response extends object>(
  fetchFunc: (paramObj: Params) => Promise<Response>,
  paramObj: Params
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Response | null>(null);

  const wrappedFunc = useCallback(
    async (paramObj: Params) => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchFunc(paramObj);
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
          console.error(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFunc]
  );

  const update = () => wrappedFunc(paramObj);

  useEffect(() => {
    wrappedFunc(paramObj);
  }, [wrappedFunc, paramObj]);

  return { isLoading, error, data, update };
}
