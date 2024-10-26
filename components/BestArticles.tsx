import React from "react";
import styles from "./BestArticles.module.css";
import Image from "next/image";
import bestbadge from "./assets/images/ui/best_badge.svg";

interface Article {
  id: number;
  title: string;
  image: string;
  writer: {
    nickname: string;
  };
  likeCount: number;
  createdAt: string;
}

interface BestArticlesProps {
  articles: Article[];
}

const BestArticles: React.FC<BestArticlesProps> = ({ articles = [] }) => {
  const bestArticles = Array.isArray(articles)
    ? [...articles].sort((a, b) => b.likeCount - a.likeCount).slice(0, 3)
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
