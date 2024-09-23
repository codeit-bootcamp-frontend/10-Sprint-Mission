import React, { useState } from 'react';
import './ProductTag.css';
import xIcon from '../../../../assets/images/xicon.png';

function ProductTag({ name, value, onChange }) {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (!inputValue.trim()) return;

            const updatedTags = [...tags, inputValue.trim()];
            setTags(updatedTags);
            onChange(name, updatedTags);
            setInputValue("");
        }
    };

    const removeTag = (tagIdx) => {
        const updatedTags = tags.filter((tag, idx) => idx !== tagIdx);
        setTags(updatedTags);
        onChange(name, updatedTags); 
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='tag-container'>
            <label className='tag'>태그</label>
            <input 
                className='tag-input'
                type='text'
                placeholder="태그를 입력해주세요"
                name={name}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={addTag}
            />
            <div className='tag-list'>
                {tags.map((tag, idx) => (
                    <div className='tag-item' key={idx}>
                        <div className='tag-content'>
                            <span>#{tag}</span>
                            <img 
                                className='x-icon' 
                                src={xIcon} 
                                onClick={() => removeTag(idx)} 
                                alt="태그 삭제"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductTag;
