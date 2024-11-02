import Image from 'next/image';
import Button from '@/src/components/Button';
import styles from './Boards.module.css';
import searchSvg from '@/src/assets/ic_search.svg';

export default function Boards() {
  return (
    <div>
      <div className={styles.boardsHeader}>
        <h3 className={styles.title}>게시글</h3>
        <div>
          <Button>글쓰기</Button>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.searchBar}>
          <Image src={searchSvg} alt="searchIcon" width={24} height={24} />
          <input
            className={styles.searchData}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <div>
          <select className={styles.options} id="options">
            <option value="recent">최신순</option>
            <option value="like">좋아요순</option>
          </select>
        </div>
      </div>
    </div>
  );
}
