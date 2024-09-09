import { useState, useCallback, useEffect } from "react";

export function useApi(asyncFunc, ...params) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const wrrapedFunc = useCallback(
    async (...params) => {
      let result;
      try {
        setIsLoading(true);
        setError(null);
        result = await asyncFunc(...params);
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
    wrrapedFunc(...params);
  }, []);

  return [isLoading, error, data];
}
