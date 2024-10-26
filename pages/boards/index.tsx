import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BestArticles from "@/components/BestArticles";
import CreateArticle from "@/components/CreateArticle";
import SearchForm from "@/components/SearchForm";
import Dropdown from "@/components/Dropdown";
import ArticlesList from "@/components/ArticlesList";
import axios from "@/lib/axios";
import styles from "./Board.module.css";

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

const Board: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response.data.list);
        setError(null);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      }
    };

    getArticles();
  }, []);

  return (
    <div className={styles.boardContainer}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <h3>베스트 게시글</h3>
        <BestArticles articles={articles} />
      </div>
      <div className={styles.CreateArticle}>
        <h3>게시글</h3>
        <CreateArticle />
      </div>
      <div>
        <SearchForm />
        <Dropdown />
      </div>
      <div>
        <ArticlesList articles={articles} />
      </div>
    </div>
  );
};

export default Board;
