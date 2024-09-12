import styles from "./AddProduct.module.css";
import commonStyles from './AddItemCommon.module.css';

const AddProduct = () => {
  return (
    <div className={`${commonStyles['common-container']} ${styles['container']}`}>
      <h4 className={styles['add-product-title']}>상품 등록하기</h4>
      <button className={styles['add-button']} type="button" disabled>등록</button>
    </div>
  );
};
export default AddProduct;