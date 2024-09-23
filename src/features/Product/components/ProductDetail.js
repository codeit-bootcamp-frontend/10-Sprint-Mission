import { useState, useEffect, useCallback } from "react";
import Tags from "components/Tags";
import HeartButton from "components/HeartButton";
import { checkObjectIsEmpty, formatDate } from "utils/commonUtils";
import { getProudct } from "../services/getProudct";
import styles from "./ProductDetail.module.css";
import kebabIcon from "assets/images/ic_kebab.svg";
import AuthorInfo from "./AuthorInfo";

const ProductDetail = ({ itemId }) => {
  const [product, setProudct] = useState({});

  const handleLoad = useCallback(async () => {
    const item = await getProudct(itemId);
    setProudct(item);
  }, [itemId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      {checkObjectIsEmpty(product) ? (
        <div>NOT FOUND</div>
      ) : (
        <section className={styles.productDetail}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={styles.productImg}
          />
          <div className={styles.productContainer}>
            <div className={styles.productInfo}>
              <div className={styles.nameContainer}>
                <h3 className={styles.name}>{product.name}</h3>
                <img src={kebabIcon} alt="케밥" />
              </div>
              <div className={styles.price}>
                {product.price.toLocaleString()}원
              </div>
              <div className={styles.subContainer}>
                <h4 className={styles.subTitle}>상품 소개</h4>
                <p className={styles.description}>{product.description}</p>
              </div>
              <div className={styles.subContainer}>
                <h4 className={styles.subTitle}>상품 태그</h4>
                <Tags tags={product.tags} />
              </div>
            </div>
            <div className={styles.userInfo}>
              <AuthorInfo
                className={styles.authorInfo}
                nickname={product.ownerId}
                date={formatDate(product.createdAt)}
              />
              <div className={styles.heartButtonContainer}>
                <HeartButton favoriteCount={product.favoriteCount} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
