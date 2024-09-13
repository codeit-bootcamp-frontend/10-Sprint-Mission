import styles from "./AddProductImage.module.css";
import commonStyles from "./AddItemCommon.module.css";
import {ReactComponent as PlusIcon} from 'assets/imgs/ic_plus.svg';
import {ReactComponent as DeleteIcon} from 'assets/imgs/ic_delete.svg';
import { useRef } from "react";

const AddProductImage = () => {
  const imagePreviewRef = useRef(null);
  const imageContentRef = useRef(null);

  const handleFileRead = (e) => {
    imageContentRef.current.style.display = 'block';

    try {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        imagePreviewRef.current.src = e.target.result;
      };
      
      reader.readAsDataURL(file);

    } catch (error) {
      console.error(error);
      alert('이미지를 불러오는데 실패했습니다');
    }
  }

  const handleDeleteImage = () => {
    imageContentRef.current.style.display = 'none';
    imagePreviewRef.current.src = '';
  }

  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>상품 이미지</h5>
      <div className={styles['image-container']}>
        <div className={styles['image-upload']}>
          <label htmlFor="file" className={styles['image-upload-label']}>
            <div className={styles['image-upload-label-content']}>
              <PlusIcon />
              <p>이미지 등록</p>
            </div>
          </label>
          <input className={styles['image-upload-input']} onChange={handleFileRead} type="file" id="file" accept="image/*" />
        </div>
        <div ref={imageContentRef} id="image-content" className={styles['image-content']}>
          <img ref={imagePreviewRef} className={styles['image-preview']} id="image-preview" src="" alt=""/>
          <DeleteIcon className={styles['delete-icon']} onClick={handleDeleteImage}/>
        </div>
      </div>
    </div>
  );
};
export default AddProductImage;