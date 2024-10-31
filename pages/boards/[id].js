import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';

export default function Article() {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  async function getArticle(targetId) {
    const res = await axios.get(`/articles/${targetId}`);
    const nextArticle = res.data;
    setArticle(nextArticle);
  }

  useEffect(() => {
    if (!id) return;

    getArticle(id);
  }, [id]);

  if (!article) return null;
  return (
    <div>
      <p>{article.content}</p>
      <img src={article.image} alt={article.title} />
      <p>{article.writer.nickname}</p>
      <p>{article.likeCount}</p>
      <p>{article.updateAt}</p>
    </div>
  );
}
