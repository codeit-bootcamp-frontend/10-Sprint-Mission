import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddCommentForm.module.css";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

interface AddCommentFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddCommentForm = ({ value, onChange, onSubmit }: AddCommentFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIsDisabled(!e.target.value);
    onChange(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Textarea
        className={styles.textarea}
        name="addComment"
        label="댓글달기"
        placeholder="댓글을 입력해주세요."
        onChange={handleTextareaChange}
        value={value}
      />
      <Button className={styles.button} type="submit" disabled={isDisabled}>
        등록
      </Button>
    </form>
  );
};

export default AddCommentForm;
