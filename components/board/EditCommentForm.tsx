import { ChangeEvent, MouseEvent, useState } from "react";
import AuthorInfo from "../ui/AuthorInfo";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { timeAgo } from "@/lib/formatDate";
import { CommentProps } from "@/types/articleTypes";
import styles from "./EditCommentForm.module.css";

interface Props extends Omit<CommentProps, "id" | "updatedAt"> {
  onCancel: VoidFunction;
  onUpdate: (value: string) => void;
}

const EditingComment = ({
  content,
  createdAt,
  writer,
  onCancel,
  onUpdate,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState(content);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const isEmpty = !e.target.value.trim();
    setValue(e.target.value);
    setIsDisabled(isEmpty);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdate(value);
  };

  return (
    <li className={styles.comment}>
      <Textarea
        value={value}
        className={styles.textarea}
        onChange={handleTextareaChange}
      />
      <div className={styles.editContainer}>
        <AuthorInfo
          className={styles.authorInfo}
          nickname={writer.nickname}
          image={writer.image}
          date={timeAgo(createdAt)}
        />
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
          >
            취소
          </Button>
          <Button
            className={styles.editButton}
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            수정완료
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EditingComment;
