import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Board from "./Board";
import Button from "../ui/Button";
import Dropdown, { DropdownOptions } from "../ui/Dropdown";
import SearchBar from "../ui/SearchBar";
import { fetchData } from "@/lib/fetchData";
import styles from "./BoardLIst.module.css";
import sortIcon from "@/public/ic_sort.svg";
import Container from "../layout/Container";
import { ArticleProps } from "@/types/articleTypes";

const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [order, setOrder] = useState("recent");
  const router = useRouter();
  const { keyword } = router.query;

  const BASE_URL = "https://panda-market-api.vercel.app/articles";
  const options: DropdownOptions = {
    recent: "최신순",
    like: "인기순",
  };

  const handleLoad = useCallback(
    async (keyword: string = "") => {
      const { list } = await fetchData(BASE_URL, {
        query: {
          orderBy: order,
          keyword,
        },
      });
      setBoards(list);
    },
    [order]
  );

  useEffect(() => {
    if (typeof keyword === "string") {
      handleLoad(keyword);
    } else {
      handleLoad();
    }
  }, [handleLoad, keyword]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>게시글</h2>
        <Button className={styles.button}>글쓰기</Button>
      </div>
      <div className={styles.toolbar}>
        <SearchBar initialValue={typeof keyword === "string" ? keyword : ""} />
        <Dropdown
          className={styles.dropdown}
          options={options}
          onSelect={setOrder}
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
    </section>
  );
};

export default BoardList;
