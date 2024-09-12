import styles from "./AddProductImage.module.css";
import commonStyles from './AddItemCommon.module.css';

const AddProductImage = () => {
  return (
    <div className={`${commonStyles['common-container']} ${styles['container']}`}>
      <h5 className={commonStyles['common-product-title']}>상품 이미지</h5>
      <div className={styles['image-container']}>
        <div className={styles['image-upload']}>
          <input type="file" id="file" accept="image/*" />
        </div>
        <img className={styles['image-preview']} src="" alt=""/>
      </div>
    </div>
  );
};
export default AddProductImage;