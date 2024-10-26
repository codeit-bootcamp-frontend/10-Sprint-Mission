import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import ArticleList from '@/components/ArticleList';
import styles from '@/styles/BestBoard.module.css';

export default function BestArticle() {
  const [articleList, setArticleList] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  async function getArticle() {
    const res = await axios.get('/articles?pageSize=1000');
    const sortedArticles = res.data.list.sort(
      (a, b) => b.likeCount - a.likeCount
    );
    setArticleList(sortedArticles);
    setDisplayedArticles(getDisplayedArticles(sortedArticles));
  }

  const getDisplayedArticles = (articles) => {
    const width = window.innerWidth;

    if (width < 600) {
      return articles.slice(0, 1);
    } else if (width < 900) {
      return articles.slice(0, 2);
    } else {
      return articles.slice(0, 3);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDisplayedArticles(getDisplayedArticles(articleList));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [articleList]);

  return (
    <div className={styles.bestList}>
      <div className={styles.titleName}>
        <h4>베스트 게시판</h4>
      </div>
      <ArticleList articles={displayedArticles} />
    </div>
  );
}
