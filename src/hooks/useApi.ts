import { useState, useCallback, useEffect } from "react";
import { Obj } from "@/apis/apis.type";

export function useApi<Params extends Obj, Response extends Obj>(
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
        const error = e as Error;
        setError(error);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFunc]
  );

  useEffect(() => {
    wrappedFunc(paramObj);
  }, [wrappedFunc, paramObj]);

  return { isLoading, error, data };
}
