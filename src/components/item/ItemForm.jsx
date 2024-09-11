import { useState } from 'react';
import './ItemForm.css';
import InputBar from '../InputBar';
import PrimaryButton from '../PrimaryButton';
import TextareaBar from '../TextareaBar';
import TagCard from './TagCard';
import plusIcon from '../../assets/ic_plus.svg';

function ItemForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tags: [],
  });

  const isFormComplete = () => {
    return (
      formData.title.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.price.trim() !== ''
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.keyCode === 13) {
      const currentTag = e.target.value;

      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, currentTag],
      }));

      e.target.value = '';
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ItemForm">
      <div className="ItemForm-title-wrapper">
        <h3 className="ItemForm-title">상품 등록하기</h3>
        <PrimaryButton onClick={handleOnSubmit} disable={!isFormComplete()}>
          등록
        </PrimaryButton>
      </div>
      <div>
        <label htmlFor="file">
          <div className="btn-upload">
            <img src={plusIcon} alt="플러스 아이콘" />
            <span className="btn-upload-description">이미지 등록</span>
          </div>
        </label>
        <input type="file" name="file" id="file" />
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
          inputId="tag"
          name="tag"
          placeholder="태그를 입력해주세요"
          onKeyDown={handleTagKeyDown}
        />
        <div className="ItemForm-tags-wrapper">
          {formData.tags.map((tag, index) => (
            <TagCard key={index} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
