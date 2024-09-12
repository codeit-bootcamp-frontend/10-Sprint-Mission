import styles from "./ProductPrice.module.css";
import commonStyles from "./AddItemCommon.module.css";

const ProductPrice = () => {
  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>판매가격</h5>
      <input type="number" className={styles['price-input']} placeholder="판매 가격을 입력해주세요" />
    </div>
  );
};
export default ProductPrice;