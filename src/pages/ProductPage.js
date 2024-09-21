import ProductDetail from "features/Product/components/ProductDetail";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles.wrapper}>
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
