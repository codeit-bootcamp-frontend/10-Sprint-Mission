import { useState, useEffect } from "react";
import FileInput from "./FileInput";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import styles from "./AddProductForm.module.css";

const INITIAL_VALUES = {
  imgFile: null,
  product: "",
  description: "",
  price: "",
  tags: [],
};

const AddProudctForm = () => {
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
    console.log("hi");
    const { imgFile, ...otherValues } = values;
    return Object.values(otherValues).some((value) => {
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return value === "";
    });
  };

  useEffect(() => {
    setIsDisabled(checkFormEmpty(values));
  }, [values]);

  return (
    <form className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>상품 등록하기</h2>
        <Button className={styles.button} isDisabled={isDisabled}>
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
        label="판매가격"
        name="price"
        placeholder="판매가격을 입력해주세요"
        value={values.price}
        onChange={handleInputChange}
      />
      <Input
        label="태그"
        name="tag"
        placeholder="태그를 입력해주세요"
        value={values.tags}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddProudctForm;
