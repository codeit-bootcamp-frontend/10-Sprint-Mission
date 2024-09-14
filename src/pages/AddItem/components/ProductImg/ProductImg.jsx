import React from 'react'
import plusicon from '../../../../assets/images/plusicon.png'
import './ProductImg.css';
import { useEffect, useState, useRef } from 'react';

function ProductImg ({ name, value, onChange }) {  
    const [preview, setPreview] = useState();
    const inputRef = useRef();
    const handleChange = (e) => {
        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    };
    const handleClick = () => {
        document.getElementById('add-button').click();
    };

    const handleClearClick = () => {
        const inputNode = inputRef.current;
        if (!inputNode) return;
    
        inputNode.value = '';
        onChange(name, null);
      };

    useEffect(() => {
        if (!value) return;
        const nextPreview = URL.createObjectURL(value);
        setPreview(nextPreview);
    }, [value]);
    

    return (
        <div className='img-container'>
            <label className='title'>상품 이미지</label>
            <div className='img-box'>
                
                <div className='custom-button' onClick={handleClick}>
                    <input 
                        id='add-button'
                        type='file'
                        onChange={handleChange}
                    ></input>
                    <img className='plus-icon' src={plusicon} alt='이미지 추가 아이콘' />
                    <div className='button-text'>이미지 등록</div>
                </div>
                
                <div className='upload'>
                    <img src={preview} alt="이미지 미리보기" />
                    {value && <button onClick={handleClearClick}></button>}
                </div>
            </div>  
        </div>
    
    )
}

export default ProductImg;