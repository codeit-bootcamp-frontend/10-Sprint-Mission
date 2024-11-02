import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Board from "./Board";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import SearchBar from "../ui/SearchBar";
import Container from "../layout/Container";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps } from "@/types/articleTypes";
import useObserver from "@/hooks/useObserver";
import styles from "./BoardLIst.module.css";
import sortIcon from "@/public/ic_sort.svg";

const BASE_URL = "https://panda-market-api.vercel.app/articles";
const options = {
  recent: "최신순",
  like: "인기순",
} as const;
type OptionKey = keyof typeof options;

export interface BoardListProps {
  initialBoards: ArticleProps[];
  initialKeyword: string;
}

const BoardList = ({ initialBoards, initialKeyword }: BoardListProps) => {
  const router = useRouter();
  const [boards, setBoards] = useState(initialBoards);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<OptionKey>("recent");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const { list } = await fetchData(BASE_URL, {
      query: {
        orderBy: order,
        keyword,
        page,
      },
    });
    setBoards((prevBoards) => (page === 1 ? list : [...prevBoards, ...list]));
    setPage((prevPage) => prevPage + 1);
    setHasMore(list.length > 0);
    setIsLoading(false);
  }, [order, page, hasMore, isLoading, keyword]);

  useEffect(() => {
    const queryKeyword =
      typeof router.query.keyword === "string" ? router.query.keyword : "";
    setKeyword(queryKeyword);
    setBoards([]);
    setPage(1);
    setHasMore(true);
  }, [order, router.query.keyword]);

  useObserver(observerRef, hasMore, isLoading, handleLoad);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>게시글</h2>
        <Link href="/addboard">
          <Button className={styles.button}>글쓰기</Button>
        </Link>
      </div>
      <div className={styles.toolbar}>
        <SearchBar initialValue={keyword} />
        <Dropdown
          className={styles.dropdown}
          options={options}
          onSelect={(value) => setOrder(value as OptionKey)}
        >
          <span>{options[order]}</span>
          <Image src={sortIcon} alt="드롭다운" />
        </Dropdown>
      </div>
      <Container className={styles.container}>
        {boards.map((board: ArticleProps) => (
          <Board key={board.id} board={board} />
        ))}
      </Container>
      {isLoading ? <p>Loading...</p> : <div id="end-of-list"></div>}
    </section>
  );
};

export default BoardList;
