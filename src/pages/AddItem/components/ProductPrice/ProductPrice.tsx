import React from 'react'
import './ProductPrice.css';

function ProductPrice({ name, value, onChange }) {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className='price-container'>
        <label className='price'>상품 가격</label>
        <input 
            className='price-input'
            type='number'
            name={name}
            value={value}
            placeholder="상품 가격을 입력해주세요"
            onChange={handleChange}
        ></input>
    </div>
  )
}

export default ProductPrice;