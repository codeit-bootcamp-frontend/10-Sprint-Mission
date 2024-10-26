import Head from "next/head";
import BestItems from "@/components/pages/boards/BestItems";
import styles from "./boards.module.css";

export default function Boards() {
  return (
    <>
      <Head>
        <title>자유게시판 - 판다마켓</title>
      </Head>
      <main className={styles.main}>
        <BestItems />
      </main>
    </>
  );
}
