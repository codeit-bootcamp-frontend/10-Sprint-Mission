import styles from "./AddProductImage.module.css";
import commonStyles from "./AddItemCommon.module.css";
import {ReactComponent as PlusIcon} from 'assets/imgs/ic_plus.svg';
import { useEffect } from "react";

const AddProductImage = () => {

  useEffect(() => {
    const fileInput = document.querySelector('input[type="file"]');
    const imagePreview = document.querySelector('#image-preview');

    const fileRead = (e) => {
      imagePreview.style.display = 'block';
      try {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
          imagePreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);

      } catch (error) {
        console.error(error);
        alert('이미지를 불러오는데 실패했습니다');
      }
    }
    
    fileInput.addEventListener('change', fileRead);

    return () => {
      fileInput.removeEventListener('change', fileRead);
    };
    
  }, []);

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
          <input className={styles['image-upload-input']} type="file" id="file" accept="image/*" />
        </div>
        <img className={styles['image-preview']} id="image-preview" src="" alt=""/>
      </div>
    </div>
  );
};
export default AddProductImage;