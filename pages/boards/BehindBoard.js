import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import BehindList from '@/components/BehindList';
import Dropdown from '@/components/DropDown';
import Search from '@/components/SearchForm';
import MoreButton from '@/components/MoreButton';
import styles from '@/styles/BehindBoard.module.css';

export default function BehindArticle() {
  const [behindList, setBehindList] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  const [sortOption, setSortOption] = useState('new');
  const [visibleCount, setVisibleCount] = useState(4);
  const router = useRouter();
  const { id } = router.query;

  async function getArticle() {
    const res = await axios.get('/articles?pageSize=1000');
    const articles = res.data.list;

    const sortedLikes = [...articles].sort((a, b) => b.likeCount - a.likeCount);
    const sortedUpdatedAt = [...articles].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );

    setLikedArticles(sortedLikes);
    setNewArticles(sortedUpdatedAt);
    setVisibleCount(4);
  }

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    if (sortOption === 'liked') {
      setBehindList(likedArticles);
    } else if (sortOption === 'new') {
      setBehindList(newArticles);
    }
  }, [sortOption, likedArticles, newArticles]);

  const handleMoreClick = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
    setVisibleCount(4);
  };

  if (behindList.length === 0) return null;

  return (
    <div className={styles.behindBoard}>
      <div className={styles.topBanner}>
        <h4 className={styles.titleName}>게시글</h4>
        <button className={styles.addButton}>글쓰기</button>
      </div>
      <div className={styles.topContain}>
        <Search />
        <Dropdown selectedOption={sortOption} onChange={handleSortChange} />
      </div>
      <div className={styles.behindContain}>
        <BehindList
          className={styles.behindList}
          articles={behindList.slice(0, visibleCount)}
        />
      </div>
      {visibleCount < behindList.length && (
        <MoreButton onClick={handleMoreClick} />
      )}
    </div>
  );
}
