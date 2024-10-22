import React, { useEffect, useState, useRef } from 'react';
import plusicon from '../../../../assets/images/plusicon.png';
import './ProductImg.css';
import xicon from '../../../../assets/images/xicon.png';
import { AddItemValues } from '../../AddItem';

interface ProductImgProps {
    name: keyof AddItemValues;
    value: globalThis.File | null;
    onChange: (name: keyof AddItemValues, value: globalThis.File | null) => void;
}

const ProductImg: React.FC<ProductImgProps> = ({ name, value, onChange }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: globalThis.File | null = e.target.files?.[0] || null;
        if (value) {
            setErrorMessage("*이미지 등록은 최대 1개까지 가능합니다.");
            return;
        }

        if (file) {
            onChange(name, file);
            setErrorMessage("");
        } else {
            onChange(name, null);
        }
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
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
                <label className='custom-button' onClick={handleButtonClick}>
                    <input
                        id='add-button'
                        type='file'
                        name={name}
                        onChange={handleChange}
                        ref={inputRef}
                        style={{ display: 'none' }} 
                    />
                    <img className='plus-icon' src={plusicon} alt='이미지 추가 아이콘' />
                </label>

                <div className='upload'>
                    {preview && <img className='preview' src={preview} alt="이미지 미리보기" />}
                    {value && (
                        <button onClick={handleClearClick}>
                            <img src={xicon} alt="이미지 삭제" />
                        </button>
                    )}
                </div>
            </div>
            {errorMessage && <span className='error-message'>{errorMessage}</span>}
        </div>
    );
};

export default ProductImg;