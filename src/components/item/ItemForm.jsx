import { useState } from 'react';
import './ItemForm.css';
import InputBar from '../InputBar';
import PrimaryButton from '../PrimaryButton';
import Textarea from '../Textarea';
import TagCard from './TagCard';
import AddFileInputBar from './AddFileInputBar';

const INITIAL_VALUES = {
  title: '',
  description: '',
  price: '',
  tags: [],
  imgFile: null,
};

function ItemForm({ initialValues = INITIAL_VALUES }) {
  const [formData, setFormData] = useState(initialValues);

  const checkFormIsValid = () => {
    return (
      formData.title.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.price.trim() !== '' &&
      formData.tags.length > 0 &&
      formData.imgFile !== null
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    const currentTag = e.target.value.trim();

    if (currentTag && e.key === 'Enter') {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, currentTag],
      }));

      e.target.value = '';
    }
  };

  const handleDeleteTag = (targetIndex) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((_, index) => index !== targetIndex),
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ItemForm">
      <section className="ItemForm-title-wrapper">
        <h3 className="ItemForm-title">상품 등록하기</h3>
        <PrimaryButton
          text="등록"
          onClick={handleOnSubmit}
          disabled={!checkFormIsValid()}
        />
      </section>
      <AddFileInputBar
        name="imgFile"
        value={formData.imgFile}
        onChange={handleFileChange}
      />
      <InputBar
        label="상품명"
        inputId="title"
        name="title"
        value={formData.title}
        placeholder="상품명을 입력해주세요"
        onChange={handleChange}
      />
      <Textarea
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
            <TagCard
              key={index}
              name={tag}
              index={index}
              onDelete={handleDeleteTag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemForm;
