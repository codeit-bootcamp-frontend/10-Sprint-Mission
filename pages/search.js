import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '@/components/ArticleList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Search.module.css';

export default function Search() {
  const [article, setArticle] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getArticle(query) {
    const res = await axios.get(`/articles/?q=${query}`);
    const nextArticle = res.data.results;
    setArticle(nextArticle);
  }

  useEffect(() => {
    getArticle(q);
  }, [q]);

  return (
    <div>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span>
      </h2>
      <ArticleList className={styles.articleList} article={article} />
    </div>
  );
}
