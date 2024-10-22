import React, { useState } from 'react';
import './ProductTag.css';
import xIcon from '../../../../assets/images/xicon.png';
import { AddItemValues } from '../../AddItem';


interface ProductTagProps {
  name: keyof AddItemValues;
  value: string[];
  onChange: (name: keyof AddItemValues, value: string[]) => void;
}

const ProductTag: React.FC<ProductTagProps> = ({ name, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(value); 

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!inputValue.trim()) return;

      const updatedTags = [...tags, inputValue.trim()];
      setTags(updatedTags);
      onChange(name, updatedTags);
      setInputValue("");
    }
  };

  const removeTag = (tagIdx: number) => {
    const updatedTags = tags.filter((_, idx) => idx !== tagIdx);
    setTags(updatedTags);
    onChange(name, updatedTags);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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