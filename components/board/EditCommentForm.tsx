import { ChangeEvent, useState } from "react";
import AuthorInfo from "../ui/AuthorInfo";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { timeAgo } from "@/lib/formatDate";
import { CommentProps } from "@/types/articleTypes";
import styles from "./EditCommentForm.module.css";

interface Props extends Omit<CommentProps, "id" | "updatedAt"> {
  onCancel: VoidFunction;
}

const EditingComment = ({ content, createdAt, writer, onCancel }: Props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value !== "") {
      setIsDisabled(false);
      return;
    }

    setIsDisabled(true);
  };

  return (
    <li className={styles.comment}>
      <Textarea
        value={content}
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
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
          >
            취소
          </button>
          <Button
            className={styles.editButton}
            type="submit"
            disabled={isDisabled}
          >
            수정완료
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EditingComment;
