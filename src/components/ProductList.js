import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";
import Card from "./Card";
import styles from "./ProductList.module.css";
import searchImg from "../assets/ic_search.svg";
import Dropdown from "./Dropdown";

const ProductList = ({ size }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");

  const handleLoad = useCallback(async () => {
    const { list } = await getProducts({ orderBy: order, pageSize: size });
    setProducts(list);
  }, [size, order]);

  useEffect(() => {
    handleLoad();
  }, [size, handleLoad]);

  return (
    <section className={styles.section}>
      <div className={styles.ProductListHeader}>
        <h2 className={styles.title}>전체 상품</h2>
        <div className={styles.inputContainer}>
          <img src={searchImg} alt="검색" />
          <input
            className={styles.input}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>

        <Link to="/additem" className={styles.button}>
          상품등록하기
        </Link>
        <Dropdown order={order} onChange={setOrder} />
      </div>
      <ul className={styles.products}>
        {products.length &&
          products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
      </ul>
    </section>
  );
};

export default ProductList;
