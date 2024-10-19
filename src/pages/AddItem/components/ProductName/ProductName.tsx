import React from 'react';
import './ProductName.css';
import { AddItemValues } from '../../AddItem';
interface ProductName {
  name: keyof AddItemValues;
  value:string;
  onChange:(name:keyof AddItemValues, value:string) => void;
}

const ProductName:React.FC<ProductName> = ({ name, value, onChange })  => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className='name-container'>
        <label className='name'>상품명</label>
        <input 
            className='name-input'
            type='text'
            name={name}
            value={value}
            placeholder="상품명을 입력해주세요"
            onChange={handleChange}
        ></input>
    </div>
  )
}

export default ProductName;