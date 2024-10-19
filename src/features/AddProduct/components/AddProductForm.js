import { useState, useEffect } from "react";
import FileInput from "./FileInput";
import Input from "shared/components/Input";
import Textarea from "shared/components/Textarea";
import Button from "shared/components/Button";
import Tags from "shared/components/Tags";
import styles from "./AddProductForm.module.css";

const INITIAL_VALUES = {
  imgFile: null,
  product: "",
  description: "",
  price: "",
  tags: [],
};

const AddProuductForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const checkFormEmpty = (values) => {
    const { imgFile, ...otherValues } = values;
    return Object.values(otherValues).some((value) => {
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return value === "";
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      const { name, value } = e.target;
      e.target.value = "";
      if (values.tags.includes(value) || value.trim() === "") return;

      handleChange(name, [...values.tags, value]);
    }
  };

  const handleTagRemove = (event, target) => {
    event.preventDefault();
    const nextValue = values.tags.filter((tag) => tag !== target);
    handleChange("tags", nextValue);
  };

  useEffect(() => {
    setIsDisabled(checkFormEmpty(values));
  }, [values]);

  return (
    <form className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>상품 등록하기</h2>
        <Button type="submit" className={styles.button} disabled={isDisabled}>
          등록
        </Button>
      </header>
      <FileInput
        label="상품 이미지"
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <Input
        type="text"
        label="상품명"
        name="product"
        placeholder="상품명을 입력해주세요"
        value={values.product}
        onChange={handleInputChange}
      />
      <Textarea
        label="상품 소개"
        name="description"
        placeholder="상품 소개를 입력해주세요"
        value={values.description}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        label="판매가격"
        name="price"
        placeholder="판매가격을 입력해주세요"
        value={values.price}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        label="태그"
        name="tags"
        placeholder="태그를 입력해주세요"
        onKeyUp={handleKeyUp}
        className={styles.tags}
      />
      <Tags tags={values.tags} onRemove={handleTagRemove} />
    </form>
  );
};

export default AddProuductForm;
