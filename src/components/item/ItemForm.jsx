import { useState } from 'react';
import './ItemForm.css';
import InputBar from '../InputBar';
import PrimaryButton from '../PrimaryButton';
import TextareaBar from '../TextareaBar';
import TagCard from './TagCard';

function ItemForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ItemForm">
      <div className="ItemForm-title-wrapper">
        <h3 className="ItemForm-title">상품 등록하기</h3>
        <PrimaryButton onClick={handleOnSubmit} disable={true}>
          등록
        </PrimaryButton>
      </div>
      <InputBar
        label="상품명"
        inputId="title"
        name="title"
        value={formData.title}
        placeholder="상품명을 입력해주세요"
        onChange={handleChange}
      />
      <TextareaBar
        label="상품 소개"
        inputId="description"
        name="description"
        value={formData.description}
        placeholder="상품 소개를 입력해주세요"
        onChange={handleChange}
      />
      <InputBar
        label="판매가격"
        inputId="price"
        name="price"
        value={formData.price}
        placeholder="판매가격을 입력해주세요"
        onChange={handleChange}
      />
      <div>
        <InputBar
          label="태그"
          inputId="tags"
          name="tags"
          value={formData?.tags}
          placeholder="태그를 입력해주세요"
          onChange={handleChange}
        />
        <div className="ItemForm-tags-wrapper">
          <TagCard name="티셔츠" />
          <TagCard name="상의" />
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
