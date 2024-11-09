import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";
import FileInput from "../ui/FileInput";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { fetchData } from "@/lib/fetchData";
import { ARTICLE_URL, IMAGE_URL } from "@/constants/url";
import styles from "./AddBoardForm.module.css";

interface Board {
  imgFile: File | null;
  title: string;
  content: string;
}

type BoardField = keyof Board;

const INITIAL_BOARD: Board = {
  imgFile: null,
  title: "",
  content: "",
};

const AddBoardForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState<Board>(INITIAL_BOARD);
  const router = useRouter();

  const handleChange = (name: BoardField, value: Board[BoardField]): void => {
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
    handleChange(name as BoardField, value);
  };

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    const { imgFile, ...otherValues } = values;
    let url = null;

    if (imgFile) {
      const formData = new FormData();
      formData.append("image", imgFile);

      const response = await fetchData<Record<string, string>>(IMAGE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: formData,
      });
      url = response.url;
    }

    const { id } = await fetchData<Record<string, string>>(ARTICLE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: url ? { image: url, ...otherValues } : { ...otherValues },
    });
    router.push(`/board/${id}`);
  };

  const checkFormEmpty = (values: Board): boolean => {
    const { title, content } = values;

    return !title || !content;
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
