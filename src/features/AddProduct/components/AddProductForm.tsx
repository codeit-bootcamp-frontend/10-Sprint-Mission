import {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import FileInput from "./FileInput";
import Input from "shared/components/Input";
import Textarea from "shared/components/Textarea";
import Button from "shared/components/Button";
import Tags from "shared/components/Tags";
import styles from "./AddProductForm.module.css";

interface Values {
  imgFile: File | null;
  product: string;
  description: string;
  price: string;
  tags: string[];
}

type ChangeValue = string | string[] | File | null;

const INITIAL_VALUES = {
  imgFile: null,
  product: "",
  description: "",
  price: "",
  tags: [],
};

const AddProductForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState<Values>(INITIAL_VALUES);

  const handleChange = (name: string, value: ChangeValue) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const checkFormEmpty = (values: Values) => {
    const { imgFile, ...otherValues } = values;

    return Object.values(otherValues).some((value) => {
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return value === "";
    });
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const { name, value } = e.currentTarget;
      e.currentTarget.value = "";
      if (values.tags.includes(value) || value.trim() === "") return;

      handleChange(name, [...values.tags, value]);
    }
  };

  const handleTagRemove = (
    e: MouseEvent<HTMLButtonElement>,
    target: string
  ) => {
    e.preventDefault();
    const nextValue: string[] = values.tags.filter((tag) => tag !== target);
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

export default AddProductForm;
