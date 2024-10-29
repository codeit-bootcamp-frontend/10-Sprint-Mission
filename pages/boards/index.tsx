import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BestArticles from "@/components/BestArticles";
import CreateArticleButton from "@/components/CreateArticleButton";
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

enum SortOption {
  RECENT = "recent",
  MOST_LIKED = "most_liked",
}

const Board: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.RECENT);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSortChange = (option: { value: string; label: string }) => {
    setSortOption(option.value as SortOption);
  };

  const getArticles = async (sortOption: string) => {
    try {
      const orderBy =
        sortOption === "most_liked" ? SortOption.MOST_LIKED : SortOption.RECENT;
      const response = await axios.get(`articles?orderBy=${orderBy}`);
      setArticles(response.data.list);
      setError(null);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError("게시글을 불러오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    getArticles(sortOption);
  }, [sortOption]);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.boardContainer}>
      {error && <div className="error-message">{error}</div>}
      <div>
        <h3>베스트 게시글</h3>
        <BestArticles />
      </div>
      <div className={styles.CreateArticle}>
        <h3>게시글</h3>
        <CreateArticleButton />
      </div>
      <div className={styles.SearchDrop}>
        <div>
          <SearchForm onSearch={(term) => setSearchTerm(term)} />
        </div>
        <div>
          <Dropdown onChange={handleSortChange} />
        </div>
      </div>
      <div>
        <ArticlesList articles={filteredArticles} />
      </div>
    </div>
  );
};

export default Board;
