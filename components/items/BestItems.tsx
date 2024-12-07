import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import useResize from "@/hooks/useResize";
import { ProductProps } from "@/types/product";
import { fetchData } from "@/lib/fetchData";
import { PRODUCT_URL } from "@/constants/url";
import styles from "./BestItems.module.css";

const PAGE_SIZE_BY_SCREEN = {
  PC: 4,
  TABLET: 2,
  MOBILE: 1,
} as const;

type PageSizeType =
  (typeof PAGE_SIZE_BY_SCREEN)[keyof typeof PAGE_SIZE_BY_SCREEN];

const getPageSize = (width: number): PageSizeType => {
  if (width < 768) return PAGE_SIZE_BY_SCREEN.MOBILE;
  if (width < 1200) return PAGE_SIZE_BY_SCREEN.TABLET;

  return PAGE_SIZE_BY_SCREEN.PC;
};

const fetchProducts = async (pageSize: number) => {
  const { list } = await fetchData<Record<string, ProductProps[]>>(
    PRODUCT_URL,
    {
      query: { pageSize, orderBy: "favorite" },
    }
  );
  return list;
};

const BestItems = () => {
  const [pageSize, setPageSize] = useState<PageSizeType>();
  const viewportWidth = useResize();

  const { data } = useQuery({
    queryKey: ["products", pageSize],
    queryFn: () => fetchProducts(pageSize!),
    enabled: !!pageSize,
  });

  useEffect(() => {
    if (!viewportWidth) return;

    const nextPageSize = getPageSize(viewportWidth);
    if (nextPageSize !== pageSize) {
      setPageSize(nextPageSize);
    }
  }, [viewportWidth, pageSize]);

  const products = data || [];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.products}>
        {products.length ? (
          products.map((product: ProductProps) => {
            return <Card key={product.id} product={product} />;
          })
        ) : (
          <div>상품 목록이 없습니다.</div>
        )}
      </ul>
    </section>
  );
};

export default BestItems;
