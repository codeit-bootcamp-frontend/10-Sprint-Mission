import { useEffect, useRef } from "react";
import styles from "./AddProduct.module.css";

interface AddProductProps {
  productImage: string;
  productTitle: string;
  productDescription: string;
  productPrice: string;
  productTags: string[];
}

const AddProduct: React.FC<AddProductProps> = ({
  productImage = '',
  productTitle = '',
  productDescription = '',
  productPrice = '',
  productTags = '',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (productTitle &&
      productDescription &&
      productPrice &&
      productTags.length > 0) {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    }
  }, [productTitle, productDescription, productPrice, productTags]);

  return (
    <div className={styles['container']}>
      <h4 className={styles['add-product-title']}>상품 등록하기</h4>
      <button 
        ref={buttonRef} 
        className={styles['add-button']} 
        type="button" 
        disabled
      >
        등록
      </button>
    </div>
  );
};

export default AddProduct;