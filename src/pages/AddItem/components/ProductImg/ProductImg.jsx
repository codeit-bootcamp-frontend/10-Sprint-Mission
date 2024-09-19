import React from 'react'
import plusicon from '../../../../assets/images/plusicon.png'
import './ProductImg.css';
import { useEffect, useState, useRef } from 'react';
import xicon from '../../../../assets/images/xicon.png'

function ProductImg ({ name, value, onChange }) {  
    const [preview, setPreview] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const inputRef = useRef();

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (value) {
            setErrorMessage("*이미지 등록은 최대 1개까지 가능합니다.");
            return;
        }

        if (file) {
            onChange(name, file);
            setErrorMessage(""); 
        }
        onChange(name, file);
    };
    const handleButtonClick = () => {
        document.getElementById('add-button').click();
    };

    const handleClearClick = () => {
        const inputNode = inputRef.current;
        if (!inputNode) return;
    
        inputNode.value = '';
        onChange(name, null);
        setErrorMessage("");
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
                
                <div className='custom-button' onClick={handleButtonClick}>
                    <input 
                        id='add-button'
                        type='file'
                        name={name}
                        onChange={handleChange}
                        ref={inputRef}
                    ></input>
                    <img className='plus-icon' src={plusicon} alt='이미지 추가 아이콘' />
                </div>
                
                <div className='upload'>
                    {value != null && <img className='preview' src={preview} alt="이미지 미리보기" />}
                    {value && <button onClick={handleClearClick}><img src={xicon} alt="이미지 삭제"></img></button>}
                </div>
            </div>  
            {errorMessage && <span className='error-message'>{errorMessage}</span> }
        </div>
    
    )
}

export default ProductImg;