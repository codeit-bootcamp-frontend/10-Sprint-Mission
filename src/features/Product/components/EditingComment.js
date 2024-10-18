import { useState } from "react";
import { timeAgo } from "utils/commonUtils";
import AuthorInfo from "./AuthorInfo";
import Textarea from "components/Textarea";
import Button from "components/Button";
import styles from "./EditingComment.module.css";

const EditingComment = ({ content, createdAt, writer, onCancel }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleTextareaChange = (event) => {
    if (event.target.value !== "") {
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
