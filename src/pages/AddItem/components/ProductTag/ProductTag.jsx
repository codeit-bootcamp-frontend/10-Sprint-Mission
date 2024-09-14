import React, { useState } from 'react'
import './ProductTag.css';
import xIcon from '../../../../assets/images/xicon.png';

function ProductTag({ name, value, onChange }) {
    const [tags, setTags] = useState([]);

    const addTag = (e) => {
        if (e.key !== "Enter") return;
        const inputValue = e.target.value;
        if (!value.trim()) return;

        const updatedTags = [...tags, value.trim()];
        setTags(updatedTags);
        onChange(name, updatedTags);
        e.target.value = "";
    };

    const removeTag = (tagIdx) => {
        setTags(tags.filter((tag, idx) => idx !== tagIdx));
    };
    const handleChange = (e) => {
        onChange(name, e.target.value);
    };
    
    return (
        <div className='tag-container'>
            <label className='tag'>태그</label>
            <input 
                className='tag-input'
                type='text'
                placeholder="태그를 입력해주세요"
                name={name}
                value={value}
                onChange={handleChange}
                onKeyDown={addTag}
            ></input>
            <div className='tag-list'>
                {tags.map((tag, idx) => (
                    <div className='tag-item' key={idx}>
                        <div className='tag-content'>
                            <span>#{tag}</span>
                            <img className='x-icon' src={xIcon} onClick={() => removeTag(idx)} alt="태그 삭제"></img>
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ProductTag