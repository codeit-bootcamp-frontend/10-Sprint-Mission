import { ChangeEvent, useState } from "react";
import { timeAgo } from "shared/utils/formatDate";
import AuthorInfo from "./AuthorInfo";
import Textarea from "shared/components/Textarea";
import Button from "shared/components/Button";
import styles from "./EditingComment.module.css";

interface Props {
  content: string;
  writer: { nickname: string; image: string };
  createdAt: string;
  onCancel: () => void;
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
