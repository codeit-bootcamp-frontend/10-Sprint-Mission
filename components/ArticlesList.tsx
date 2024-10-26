import React from "react";
import Link from "next/link";
import styles from "@/styles/ArticlesList.module.css";
import Image from "next/image";

const ArticlesList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div>No articles available</div>;
  }

  return (
    <div className={styles.ArticlesList}>
      {articles.map((article) => (
        <div key={article.id} className={styles.ArticlesList}>
          <div>
            <h3>{article.title}</h3>
            <div className={styles.image}>
              <Image fill src={article.image} alt={article.image} />
            </div>
          </div>
          <div>
            <div>
              <span>{article.writer.nickname}</span>
              <span>{new Date(article.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
              <span>♡ {article.likeCount}+</span>
            </div>
          </div>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
