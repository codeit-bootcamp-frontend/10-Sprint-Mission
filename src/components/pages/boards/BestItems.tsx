import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getArticles } from "@/apis/apis";
import { GetArticlesParams, GetArticlesRes } from "@/apis/apis.type";
import { useQuery } from "@/hooks/useQuery";
import BestItem from "./componnets/BestItem";
import styles from "./BestItems.module.css";

const pageSizeTable = { PC: 3, TABLET: 2, MOBILE: 1 };

export default function BestItems() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState<GetArticlesParams>({
    page: 1,
    pageSize: pageSizeTable[media],
    orderBy: "like",
  });
  const { isLoading, error, data, update } = useQuery<
    GetArticlesParams,
    GetArticlesRes
  >(getArticles, paramObj);

  useEffect(() => {
    setParamObj((prevObj) => ({
      ...prevObj,
      pageSize: pageSizeTable[media],
    }));
    update();
  }, [media, update]);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>베스트 게시글</h2>
      </div>
      {!isLoading && !error && data && (
        <div className={styles.body}>
          {data.list.map((item) => (
            <BestItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
}
