import styles from "./ProductPrice.module.css";
import commonStyles from "./AddItemCommon.module.css";
import { useState } from "react";

const ProductPrice = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if(e.target.value === '') {
      setValue('');
      return;
    }

    const inputValue = Number(e.target.value.replace(/[^0-9]/g, '')).toLocaleString();
    
    if(inputValue === '') {
      setValue('');
      return;
    }
    setValue(inputValue);
  }

  return (
    <div className={commonStyles['common-container']}>
      <h5 className={commonStyles['common-product-title']}>판매가격</h5>
      <input type="text" value={value} onChange={handleChange} className={styles['price-input']} placeholder="판매 가격을 입력해주세요" />
    </div>
  );
};
export default ProductPrice;