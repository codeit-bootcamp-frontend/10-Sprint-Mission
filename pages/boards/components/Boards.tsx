import Image from 'next/image';
import Button from '@/src/components/Button';
import styles from './Boards.module.css';
import searchSvg from '@/src/assets/ic_search.svg';
import { getBoards } from '@/src/apis/boardsApi';
import type {
  Board,
  GetBoardsResponse,
  GetBoardsRequestParams,
} from '@/src/apis/boardTypes';
import { useApi } from '@/src/hooks/useApi';
import { useEffect, useRef, useState } from 'react';
import BoardCard from './BoardCard';
import Link from 'next/link';

const PAGE_SIZE = 10;

export default function Boards() {
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [boards, setBoards] = useState<Board[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error, makeRequest } = useApi<
    GetBoardsResponse,
    GetBoardsRequestParams
  >(getBoards, {
    page,
    pageSize: PAGE_SIZE,
    orderBy,
  });

  useEffect(() => {
    if (data) {
      setBoards((prevBoards) => [...prevBoards, ...data.list]);
      setIsFetching(false);

      if (data.list.length < PAGE_SIZE) {
        setHasMore(false);
      }
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMore) {
          setIsFetching(true);
          setPage((prevPage) => prevPage + 1);
          makeRequest({ page: page + 1, pageSize: PAGE_SIZE, orderBy });
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [isFetching, page, orderBy, hasMore]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.target.value;
    setOrderBy(newOrder);
    setHasMore(true);
    setBoards([]);
    setPage(1);
    makeRequest({ page: 1, pageSize: PAGE_SIZE, orderBy: newOrder });
  };

  return (
    <div>
      <section className={styles.boardsHeader}>
        <h3 className={styles.title}>게시글</h3>
        <div>
          <Button>글쓰기</Button>
        </div>
      </section>
      <section className={styles.filter}>
        <div className={styles.searchBar}>
          <Image src={searchSvg} alt="searchIcon" width={24} height={24} />
          <input
            className={styles.searchData}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <div>
          <select
            className={styles.options}
            id="options"
            onChange={handleOptionChange}
          >
            <option value="recent">최신순</option>
            <option value="like">좋아요순</option>
          </select>
        </div>
      </section>
      <section className={styles.boardsContainer}>
        {boards.map((board) => (
          <Link key={board.id} href={`/boards/${board.id}`}>
            <BoardCard {...board} />
          </Link>
        ))}
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </section>
      <div ref={observerRef} style={{ height: '1px' }}></div>
    </div>
  );
}
