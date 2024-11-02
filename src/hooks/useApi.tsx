import { useEffect, useState, useCallback } from 'react';

type ApiResponse<T, P extends object> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  makeRequest: (params: P) => Promise<void>;
};

export function useApi<T, P extends object>(
  fetchFunction: (params: P) => Promise<T>,
  params: P
): ApiResponse<T, P> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const wrappedFunction = useCallback(
    async (params: P) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchFunction(params);
        setData(result);
      } catch (err) {
        console.error(err);
        setError('데이터 로딩 실패');
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFunction]
  );

  useEffect(() => {
    wrappedFunction(params);
  }, [params, wrappedFunction]);

  return { data, isLoading, error, makeRequest: wrappedFunction };
}
