import { useState, useCallback, useEffect } from "react";

export function useApi(asyncFunc, paramObj) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const wrrapedFunc = useCallback(
    async (paramObj) => {
      let result;
      try {
        setIsLoading(true);
        setError(null);
        result = await asyncFunc(paramObj);
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
    wrrapedFunc(paramObj);
  }, [wrrapedFunc, paramObj]);

  return [isLoading, error, data];
}
