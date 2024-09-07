import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../api/productApi";
import Card from "./Card";
import styles from "./BestProducts.module.css";

const BestProducts = ({ size }) => {
  const [products, setProducts] = useState();

  const handleLoad = useCallback(async () => {
    const { list } = await getProducts({ orderBy: "favorite", pageSize: size });
    setProducts(list);
  }, [size]);

  useEffect(() => {
    handleLoad();
  }, [size, handleLoad]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.products}>
        {products &&
          products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
      </ul>
    </section>
  );
};

export default BestProducts;
