import styles from "./AddProductImage.module.css";
import commonStyles from "./AddItemCommon.module.css";
import { ReactComponent as PlusIcon } from 'assets/imgs/ic_plus.svg';
import { ReactComponent as DeleteIcon } from 'assets/imgs/ic_delete.svg';
import { useRef, ChangeEvent, MouseEvent } from "react";

interface AddProductImageProps {
  productImage?: string;
  setProductImage?: (image: string) => void;
}

const AddProductImage: React.FC<AddProductImageProps> = ({
  productImage = '',
  setProductImage = () => {},
}) => {
  const imageContentRef = useRef<HTMLDivElement>(null);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);

  const handleFileRead = (e: ChangeEvent<HTMLInputElement>) => {
    if (imageContentRef.current) {
      imageContentRef.current.style.display = 'block';
    }

    try {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target) {
            if (setProductImage) {
              setProductImage(event.target.result as string);
            }
          }
        };

        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error(error);
      alert('이미지를 불러오는데 실패했습니다');
    }
  };

  const handleShowErrorMessage = (e: MouseEvent<HTMLDivElement>) => {
    if (imageContentRef.current && imageContentRef.current.style.display === 'block') {
      e.preventDefault();
      if (errorMessageRef.current) {
        errorMessageRef.current.style.display = 'block';
      }
    }
  };

  const handleDeleteImage = () => {
    if (imageContentRef.current) {
      imageContentRef.current.style.display = 'none';
    }
    if (setProductImage) {
      setProductImage('');
    }
    if (errorMessageRef.current) {
      errorMessageRef.current.style.display = 'none';
    }
  };

  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>상품 이미지</h5>
      <div className={styles['image-container']}>
        <div onClick={handleShowErrorMessage} className={styles['image-upload']}>
          <label htmlFor="file" className={styles['image-upload-label']}>
            <div className={styles['image-upload-label-content']}>
              <PlusIcon />
              <p>이미지 등록</p>
            </div>
          </label>
          <input
            className={styles['image-upload-input']}
            onChange={handleFileRead}
            type="file"
            id="file"
            accept="image/*"
          />
        </div>
        <div
          ref={imageContentRef}
          id="image-content"
          className={styles['image-content']}
        >
          <img
            className={styles['image-preview']}
            id="image-preview"
            src={productImage}
            alt=""
          />
          <DeleteIcon className={styles['delete-icon']} onClick={handleDeleteImage} />
        </div>
      </div>
      <p
        ref={errorMessageRef}
        className={styles['image-upload-error-message']}
      >
        *이미지 등록은 최대 1개까지 가능합니다.
      </p>
    </div>
  );
};

export default AddProductImage;
