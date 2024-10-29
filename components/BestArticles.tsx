import React, { useEffect, useState } from "react";
import styles from "./BestArticles.module.css";
import Image from "next/image";
import bestbadge from "./assets/images/ui/best_badge.svg";
import axios from "@/lib/axios";
import heart from "./assets/images/icons/ic_heart.svg";

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

type PageSizeByScreen = 1 | 2 | 3;

const BestArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeByScreen>(1);

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
        const response = await axios.get(`articles?orderBy=like`);
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
        <div key={article.id}>
          <Image
            className={styles.bestbadge}
            width={102}
            height={30}
            src={bestbadge}
            alt={bestbadge}
          />
          <div className={styles.title}>
            <h3>{article.title}</h3>
            <div className={styles.image}>
              <Image fill src={article.image} alt={article.image} />
            </div>
          </div>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span> {article.writer.nickname} </span>
              <Image width={16} height={16} src={heart} alt={heart} />
              <span> {article.likeCount}+ </span>
            </div>
            <div className={styles.metaItem}>
              <span> {new Date(article.createdAt).toLocaleDateString()} </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestArticles;
