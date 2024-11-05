import Image from 'next/image';
import Button from '@/src/components/Button';
import styles from './Boards.module.css';
import searchSvg from '@/src/assets/ic_search.svg';
import { useState } from 'react';
import BoardCard from './BoardCard';
import Link from 'next/link';
import { useBoards } from '@/src/hooks/useBoards';

export default function Boards() {
  const [orderBy, setOrderBy] = useState('recent');
  const { boards, isLoading, error, observerRef, resetBoards } =
    useBoards(orderBy);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrder = e.target.value;
    setOrderBy(newOrder);
    resetBoards();
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
