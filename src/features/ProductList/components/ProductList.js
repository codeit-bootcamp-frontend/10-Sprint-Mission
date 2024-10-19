import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "shared/components/Card";
import Dropdown from "shared/components/Dropdown";
import Pagination from "./Pagination";
import { BASE_URL } from "shared/constants/url";
import { fetchData } from "shared/services/fetchData";
import styles from "./ProductList.module.css";
import searchImg from "assets/images/ic_search.svg";
import sortImg from "assets/images/ic_sort.svg";

const ProductList = ({ size }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const options = {
    recent: "최신순",
    favorite: "좋아요순",
  };

  const handleLoad = useCallback(async () => {
    const { list, totalCount } = await fetchData(BASE_URL, {
      query: {
        orderBy: order,
        pageSize: size,
        page: currentPage,
      },
    });
    setProducts(list);
    setTotalCount(totalCount);
  }, [size, order, currentPage]);

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
        <Dropdown
          className={styles.dropdown}
          onSelect={setOrder}
          options={options}
        >
          <span>{options[order]}</span>
          <img src={sortImg} alt="드롭다운" />
        </Dropdown>
      </div>
      {products.length ? (
        <ul className={styles.products}>
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </ul>
      ) : (
        <div>상품 목록이 없습니다.</div>
      )}
      <Pagination
        totalCount={totalCount}
        pageSize={size}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </section>
  );
};

export default ProductList;
