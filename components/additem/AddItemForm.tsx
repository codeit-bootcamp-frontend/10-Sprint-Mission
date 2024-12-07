import {
  useState,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import FileInput from "../ui/FileInput";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import Tags from "./Tags";
import { uploadImage } from "@/lib/imageService";
import { addProduct } from "@/lib/productService";
import styles from "./AddItemForm.module.css";

interface ProductFormValues {
  imgFile: File | null;
  product: string;
  description: string;
  price: string;
  tags: string[];
}

type ProductField = keyof ProductFormValues;

export type CreateProductRequestBody = Omit<ProductFormValues, "imgFile"> & {
  imgUrl: string | null;
};

const INITIAL_PRODUCT = {
  imgFile: null,
  product: "",
  description: "",
  price: "",
  tags: [],
};

const AddItemForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState<ProductFormValues>(INITIAL_PRODUCT);
  const router = useRouter();

  const uploadImageMutation = useMutation({
    mutationFn: (imgFile: File) => uploadImage(imgFile),
  });

  const addProductMutation = useMutation({
    mutationFn: (formValues: CreateProductRequestBody) =>
      addProduct(formValues),
    onSuccess: (id) => {
      router.push(`/items/${id}`);
    },
  });

  const handleChange = (
    name: string,
    value: ProductFormValues[ProductField]
  ) => {
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

  const checkFormEmpty = (values: ProductFormValues) => {
    const { imgFile, ...otherValues } = values;

    return Object.values(otherValues).some((value) => {
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return value === "";
    });
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    const { imgFile, ...otherValues } = values;
    let imgUrl = null;

    if (imgFile) {
      imgUrl = await uploadImageMutation.mutateAsync(imgFile);
    }

    addProductMutation.mutate({ imgUrl, ...otherValues });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      e.stopPropagation();

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
        <Button
          type="submit"
          className={styles.button}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
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
        onKeyDown={handleKeyDown}
        className={styles.tags}
      />
      <Tags tags={values.tags} onRemove={handleTagRemove} />
    </form>
  );
};

export default AddItemForm;
