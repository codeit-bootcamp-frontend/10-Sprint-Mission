import React from 'react';
import './ProductDescription.css';
import { AddItemValues } from '../../AddItem';     

interface ProductDescriptionProps {
  name: keyof AddItemValues;
  value:string;
  onChange : (name:keyof AddItemValues, value:string | null) => void;
}

const ProductDescription:React.FC<ProductDescriptionProps> = ({ name, value, onChange }) => {
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };
  return (
    <div className='description-container'>
        <label className='description'>상품 소개</label>
        <textarea 
            className='description-input'
            name={name}
            value={value}
            placeholder="상품 소개를 입력해주세요"
            onChange={handleChange}
        ></textarea>
    </div>
  )
}

export default ProductDescription