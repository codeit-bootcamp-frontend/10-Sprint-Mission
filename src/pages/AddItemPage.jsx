import { useState } from 'react';
import InputBar from '../components/InputBar';
import './AddItemPage.css';

function AddItemPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="AddItemPage">
      <div className="max-container">
        <InputBar
          label="상품명"
          inputId="item-title"
          name="title"
          value={inputValue}
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
        <textarea></textarea>
      </div>
    </div>
  );
}

export default AddItemPage;
