import styles from "./ProductTitle.module.css";
import commonStyles from "./AddItemCommon.module.css";
import { useAddItemSharedData } from "./useAddItemSharedData";

const ProductTitle = () => {
  const { productTitle, setProductTitle } = useAddItemSharedData();

  const handleProductTitleChange = (e) => {
    setProductTitle(e.target.value);
  }

  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>상품명</h5>
      <input className={styles['product-title-input']} value={productTitle} onChange={handleProductTitleChange} type="text" placeholder="상품명을 입력해주세요" />
    </div>
  );
};
export default ProductTitle;