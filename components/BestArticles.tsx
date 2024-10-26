import React, { useEffect, useState } from "react";
import styles from "./BestArticles.module.css";
import Image from "next/image";
import bestbadge from "./assets/images/ui/best_badge.svg";
import axios from "@/lib/axios";

interface Article {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: {
    nickname: string;
    id: number;
  };
  id: number;
  title: string;
  image: string;
  content: string;
}

const BestArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number>(1);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width >= 375 && width <= 767) {
        setPageSize(1);
      } else if (width >= 768 && width < 1280) {
        setPageSize(2);
      } else if (width >= 1280) {
        setPageSize(3);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

  useEffect(() => {
    const getBestArticles = async () => {
      try {
        const response = await axios.get(`/articles`);
        setArticles(response.data.list);
      } catch (error) {
        console.error("Error fetching best articles:", error);
      }
    };

    getBestArticles();
  }, [pageSize]);

  const bestArticles = Array.isArray(articles)
    ? [...articles].sort((a, b) => b.likeCount - a.likeCount).slice(0, pageSize)
    : [];

  return (
    <div className={styles.BestArticles}>
      {bestArticles.map((article) => (
        <div key={article.id} className="best-article">
          <Image width={102} height={30} src={bestbadge} alt={bestbadge} />
          <div className={styles.title}>
            <h3>{article.title}</h3>
            <div className={styles.image}>
              <Image fill src={article.image} alt={article.image} />
            </div>
          </div>
          <div className="article-meta">
            <span>{article.writer.nickname} </span>
            <span>♡ {article.likeCount}+</span>
            <div>
              <span>{new Date(article.createdAt).toLocaleDateString()} </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestArticles;
