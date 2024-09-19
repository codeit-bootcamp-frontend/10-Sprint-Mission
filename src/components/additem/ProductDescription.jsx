import styles from "./ProductDescription.module.css";
import commonStyles from "./AddItemCommon.module.css";

const ProductDescription = ({ productDescription, setProductDescription }) => {

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  }

  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>상품 설명</h5>
      <textarea className={styles['product-description']} value={productDescription} onChange={handleProductDescriptionChange} placeholder="상품 설명을 입력해주세요"/>
    </div>
  );
};
export default ProductDescription;