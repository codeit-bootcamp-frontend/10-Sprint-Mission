import styles from "./ProductTitle.module.css";
import commonStyles from "./AddItemCommon.module.css";

const ProductTitle = () => {
  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>상품명</h5>
      <input className={styles['product-title-input']} type="text" placeholder="상품명을 입력해주세요" />
    </div>
  );
};
export default ProductTitle;