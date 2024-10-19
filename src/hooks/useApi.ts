import { useState, useCallback, useEffect } from "react";

type ObjType = Record<string, unknown>;

export function useApi(
  asyncFunc: (paramObj: ObjType) => Promise<ObjType>,
  paramObj: ObjType
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<ObjType | null>(null);

  const wrappedFunc = useCallback(
    async (paramObj: ObjType) => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await asyncFunc(paramObj);
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
          console.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunc]
  );

  useEffect(() => {
    wrappedFunc(paramObj);
  }, [wrappedFunc, paramObj]);

  return { isLoading, error, data };
}
