import React from "react";
import styles from "@/styles/BestArticles.module.css";
import Image from "next/image";

const BestArticles = ({ articles = [] }) => {
  const bestArticles = Array.isArray(articles)
    ? [...articles].sort((a, b) => b.likeCount - a.likeCount).slice(0, 3)
    : [];

  return (
    <div className={styles.BestArticles}>
      {bestArticles.map((article) => (
        <div key={article.id} className="best-article">
          <span role="img" aria-label="best" className="best-badge">
            🌟 Best
          </span>
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
