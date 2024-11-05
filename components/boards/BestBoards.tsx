import { useCallback, useEffect, useState } from "react";
import BestBoard from "./BestBoard";
import Container from "../layout/Container";
import useResize from "@/hooks/useResize";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps } from "@/types/articleTypes";
import styles from "./BestBoards.module.css";
import Link from "next/link";

const PAGE_SIZE_BY_SCREEN = {
  PC: 3,
  TABLET: 2,
  MOBILE: 1,
} as const;

type PageSizeType =
  (typeof PAGE_SIZE_BY_SCREEN)[keyof typeof PAGE_SIZE_BY_SCREEN];

const getPageSize = (width: number): PageSizeType => {
  if (width < 768) return PAGE_SIZE_BY_SCREEN.MOBILE;
  if (width < 1200) return PAGE_SIZE_BY_SCREEN.TABLET;

  return PAGE_SIZE_BY_SCREEN.PC;
};

const BestBoards = () => {
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState<PageSizeType>();
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
          <Link key={article.id} href={`/board/${article.id}`}>
            <BestBoard {...article} />
          </Link>
        ))}
      </Container>
    </section>
  );
};

export default BestBoards;
