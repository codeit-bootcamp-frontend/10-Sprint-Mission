import Head from "next/head";
import BestItemListSection from "@/components/pages/items/BestItemsSection";
import styles from "./Items.module.css";

export default function Items() {
  return (
    <>
      <Head>
        <title>중고마켓 - 판다마켓</title>
      </Head>
      <main className={styles.main}>
        <BestItemListSection />
      </main>
    </>
  );
}
