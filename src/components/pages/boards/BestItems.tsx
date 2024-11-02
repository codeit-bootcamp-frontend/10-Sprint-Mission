import { useState, useEffect } from "react";
import { useMedia } from "@/hooks/useMedia";
import { getArticles } from "@/apis/apis";
import { GetArticlesParams, GetArticlesRes } from "@/apis/apis.type";
import { useQuery } from "@/hooks/useQuery";
import BestItem from "./componnets/BestItem";
import styles from "./BestItems.module.css";

const pageSizeTable = { PC: 3, TABLET: 2, MOBILE: 1 };

export default function BestItems() {
  const media = useMedia();
  const [paramObj, setParamObj] = useState<GetArticlesParams>();
  const { isLoading, error, data, query } = useQuery<
    GetArticlesParams,
    GetArticlesRes
  >(getArticles);

  useEffect(() => {
    if (!media) return;
    setParamObj((prevObj) =>
      !prevObj
        ? { page: 1, pageSize: pageSizeTable[media], orderBy: "like" }
        : { ...prevObj, pageSize: pageSizeTable[media] }
    );
  }, [media]);

  useEffect(() => {
    if (!paramObj) return;
    query(paramObj);
  }, [query, paramObj]);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>베스트 게시글</h2>
      </div>
      {!isLoading && !error && data && (
        <div className={styles.body}>
          {data.list.map((article) => (
            <BestItem key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
