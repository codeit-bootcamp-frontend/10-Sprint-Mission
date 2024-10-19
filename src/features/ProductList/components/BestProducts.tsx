import { useState, useEffect, useCallback } from "react";
import Card from "shared/components/Card";
import { BASE_URL } from "shared/constants/url";
import { fetchData } from "shared/services/fetchData";
import { Product } from "shared/types/components";
import styles from "./BestProducts.module.css";

const BestProducts = ({ size }: { size: number }) => {
  const [products, setProducts] = useState([]);

  const handleLoad = useCallback(async () => {
    const { list } = await fetchData(BASE_URL, {
      query: { orderBy: "favorite", pageSize: size },
    });
    setProducts(list);
  }, [size]);

  useEffect(() => {
    handleLoad();
  }, [size, handleLoad]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.products}>
        {products.length ? (
          products.map((product: Product) => {
            return <Card key={product.id} product={product} />;
          })
        ) : (
          <div>상품 목록이 없습니다.</div>
        )}
      </ul>
    </section>
  );
};

export default BestProducts;
