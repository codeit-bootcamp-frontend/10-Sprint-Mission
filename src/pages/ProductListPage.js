import { useState, useEffect } from "react";
import BestProducts from "features/ProductList/components/BestProducts";
import ProductList from "features/ProductList/components/ProductList";
import { getResponsiveConstant } from "../constants/responsiveConstants";
import styles from "./ProductListPage.module.css";

const ProductListPage = () => {
  const { bestProudctsSize, productListSize } = getResponsiveConstant(
    window.innerWidth
  );
  const [bestProductsLimit, setBestProductsLimit] = useState(bestProudctsSize);
  const [productListLimit, setProductListLimit] = useState(productListSize);

  const handleResize = () => {
    const { bestProudctsSize, productListSize } = getResponsiveConstant(
      window.innerWidth
    );
    setBestProductsLimit(bestProudctsSize);
    setProductListLimit(productListSize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <BestProducts size={bestProductsLimit} />
      <ProductList size={productListLimit} />
    </div>
  );
};

export default ProductListPage;
