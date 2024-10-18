import { useState, useCallback, useEffect } from "react";

export function useApi(asyncFunc, paramObj) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const wrappedFunc = useCallback(
    async (paramObj) => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await asyncFunc(paramObj);
        setData(result);
      } catch (error) {
        setError(error);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunc]
  );

  useEffect(() => {
    wrappedFunc(paramObj);
  }, [wrappedFunc, paramObj]);

  return [isLoading, error, data];
}
