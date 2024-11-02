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
import { useEffect, useState } from 'react';
import BoardCard from './BoardCard';

const PAGE_SIZE = 10;

export default function Boards() {
  const [orderBy, setOrderBy] = useState('recent');

  const requestParams: GetBoardsRequestParams = {
    page: 1,
    pageSize: PAGE_SIZE,
    orderBy: orderBy,
  };

  const { data, isLoading, error, makeRequest } = useApi<
    GetBoardsResponse,
    GetBoardsRequestParams
  >(getBoards, requestParams);

  const handelOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.target.value;
    setOrderBy(newOrder);
    makeRequest({ ...requestParams, orderBy: newOrder });
  };

  const boards = data?.list || [];
  console.log(boards);

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
            onChange={handelOptionChange}
          >
            <option value="recent">최신순</option>
            <option value="like">좋아요순</option>
          </select>
        </div>
      </section>
      <section className={styles.boardsContainer}>
        {isLoading ? (
          <div>Loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          boards.map((board) => <BoardCard key={board.id} {...board} />)
        )}
      </section>
    </div>
  );
}
