import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";
import FileInput from "../ui/FileInput";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { fetchData } from "@/lib/fetchData";
import { ARTICLE_URL, IMAGE_URL } from "@/constants/url";
import { useAuth } from "@/contexts/AuthProvider";
import styles from "./AddBoardForm.module.css";

interface Board {
  imgFile: File | null;
  title: string;
  content: string;
}

type ChangeValue = string | File | null;

const INITIAL_BOARD: Board = {
  imgFile: null,
  title: "",
  content: "",
};

const AddBoardForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState(INITIAL_BOARD);
  const { accessToken } = useAuth();
  const router = useRouter();
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

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { imgFile, ...otherValues } = values;
    let url = null;
    if (imgFile) {
      const formData = new FormData();
      formData.append("image", imgFile);

      const response = await fetchData(IMAGE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
      url = response.url;
    }

    await fetchData(ARTICLE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: url ? { image: url, ...otherValues } : { ...otherValues },
    });
    router.push("/boards");
  };

  const checkFormEmpty = (values: Board) => {
    const { imgFile, ...otherValues } = values;

    return Object.values(otherValues).some((value) => value === "");
  };

  useEffect(() => {
    setIsDisabled(checkFormEmpty(values));
  }, [values]);

  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2>게시글 쓰기</h2>
        <Button
          type="submit"
          className={styles.button}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          등록
        </Button>
      </div>
      <Input
        className={styles.input}
        type="text"
        name="title"
        label="*제목"
        placeholder="제목을 입력해주세요"
        value={values.title}
        onChange={handleInputChange}
      />
      <Textarea
        className={styles.input}
        label="*내용"
        name="content"
        placeholder="내용을 입력해주세요"
        value={values.content}
        onChange={handleInputChange}
      />
      <FileInput
        className={styles.input}
        label="이미지"
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddBoardForm;
