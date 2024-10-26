import React from "react";
import Link from "next/link";
import styles from "./ArticlesList.module.css";
import Image from "next/image";
import profile from "./assets/images/ui/ic_profile.svg";
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

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div>No articles available</div>;
  }

  return (
    <div className={styles.ArticlesList}>
      {articles.map((article) => (
        <div key={article.id}>
          <div className={styles.Article}>
            <h3>{article.title}</h3>
            <div className={styles.image}>
              <Image fill src={article.image} alt={article.image} />
            </div>
          </div>
          <div className={styles.meta}>
            <div>
              <Image width={24} height={24} src={profile} alt={profile} />
              <span> {article.writer.nickname} </span>
              <span> {new Date(article.updatedAt).toLocaleDateString()} </span>
            </div>
            <div>
              <Image width={24} height={24} src={heart} alt={heart} />
              <span> {article.likeCount}+</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
