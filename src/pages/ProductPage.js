import ProductDetail from "features/Product/components/ProductDetail";
import styles from "./ProductPage.module.css";
import Inquiry from "features/Product/components/Inquiry";

const ProductPage = () => {
  return (
    <div className={styles.wrapper}>
      <ProductDetail />
      <Inquiry />
    </div>
  );
};

export default ProductPage;
