import { MutableRefObject, useEffect } from "react";

const useObserver = (
  observerRef: MutableRefObject<IntersectionObserver | null>,
  hasMore: boolean,
  isLoading: boolean,
  handleLoad: VoidFunction
) => {
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          handleLoad();
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector("#end-of-list");
    if (target) observerRef.current.observe(target);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [observerRef, handleLoad, hasMore, isLoading]);
};

export default useObserver;
