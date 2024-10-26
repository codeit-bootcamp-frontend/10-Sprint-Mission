import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Board from "./boards";

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
      </Head>
      <Board />
    </>
  );
}
