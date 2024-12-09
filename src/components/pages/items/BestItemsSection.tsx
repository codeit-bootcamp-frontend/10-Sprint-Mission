import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMedia } from "@/store/MediaContext";
import { getProducts } from "@/apis/product";
import { GetProductsParams } from "@/types/api";
import Item from "./Item";
import styles from "./BestItemsSection.module.css";

const pageSizeTable = { PC: 4, TABLET: 2, MOBILE: 1 };

export default function BestItemsSection() {
  const media = useMedia();
  const [params, setParams] = useState<GetProductsParams>();
  const { isPending, error, data } = useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params!),
    enabled: !!params,
  });

  useEffect(() => {
    if (!media) return;
    setParams({
      page: 1,
      pageSize: pageSizeTable[media],
      orderBy: "favorite",
    });
  }, [media]);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>베스트 상품</h2>
      </div>
      {!isPending && !error && data && (
        <div className={styles.body}>
          {data.list.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
}
