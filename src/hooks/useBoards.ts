import { useEffect, useRef, useState } from 'react';
import { getBoards } from '@/src/apis/boardsApi';
import type { Board } from '@/src/apis/boardTypes';

const PAGE_SIZE = 10;

export const useBoards = (orderBy: string) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchBoards = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getBoards({
        page,
        pageSize: PAGE_SIZE,
        orderBy,
      });
      setBoards((prevBoards) => [...prevBoards, ...response.list]);
      setIsFetching(false);

      if (response.list.length < PAGE_SIZE) {
        setHasMore(false);
      }
    } catch (err) {
      setError('Failed to fetch boards');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, [page, orderBy]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMore) {
          setIsFetching(true);
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 }
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [isFetching, hasMore]);

  const resetBoards = () => {
    setBoards([]);
    setPage(1);
    setHasMore(true);
  };

  return {
    boards,
    isLoading,
    error,
    observerRef,
    resetBoards,
  };
};
