import { useCallback, useEffect, useState } from "react";
import BestBoard from "./BestBoard";
import Container from "../layout/Container";
import useResize from "@/hooks/useResize";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps } from "@/types/articleTypes";
import styles from "./BestBoards.module.css";

const getPageSize = (width: number) => {
  if (width < 768) return 1;
  if (width < 1200) return 2;

  return 3;
};

const BestBoards = () => {
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState<number>();
  const viewportWidth = useResize();
  const BASE_URL = "https://panda-market-api.vercel.app/articles";

  const handleLoad = useCallback(async (size: number) => {
    const { list } = await fetchData(BASE_URL, {
      query: { pageSize: size, orderBy: "like" },
    });
    setArticles(list);
  }, []);

  useEffect(() => {
    if (!viewportWidth) return;

    const nextPageSize = getPageSize(viewportWidth);
    if (nextPageSize !== pageSize) {
      setPageSize(nextPageSize);
      handleLoad(nextPageSize);
    }
  }, [viewportWidth, handleLoad, pageSize]);

  return (
    <section className={styles.wrapper}>
      <h2>베스트 게시글</h2>
      <Container className={styles.container}>
        {articles.map((article: ArticleProps) => (
          <BestBoard key={article.id} article={article} />
        ))}
      </Container>
    </section>
  );
};

export default BestBoards;
