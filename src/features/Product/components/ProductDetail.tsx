import { useState, useEffect, useCallback } from "react";
import Tags from "shared/components/Tags";
import HeartButton from "shared/components/HeartButton";
import AuthorInfo from "./AuthorInfo";
import { checkObjectIsEmpty } from "shared/utils/commonUtils";
import { formatDate } from "shared/utils/formatDate";
import { BASE_URL } from "shared/constants/url";
import { fetchData } from "shared/services/fetchData";
import styles from "./ProductDetail.module.css";
import kebabIcon from "assets/images/ic_kebab.svg";

interface Product {
  images: string[];
  name: string;
  price: number;
  description: string;
  tags: string[];
  ownerId: string;
  createdAt: string;
  favoriteCount: number;
  [key: string]: unknown;
}

const INITIAL_PRODUCT = {
  images: [],
  name: "",
  price: 0,
  description: "",
  tags: [],
  ownerId: "",
  createdAt: "",
  favoriteCount: 0,
};

const ProductDetail = ({ itemId }: { itemId: number }) => {
  const [product, setProduct] = useState<Product>(INITIAL_PRODUCT);

  const handleLoad = useCallback(async () => {
    const url = `${BASE_URL}/${itemId}`;
    const item = await fetchData(url);
    setProduct(item);
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
