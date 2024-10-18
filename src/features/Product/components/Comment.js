import { timeAgo } from "utils/commonUtils";
import Dropdown from "./Dropdown";
import AuthorInfo from "./AuthorInfo";
import styles from "./Comment.module.css";

const Comment = ({ content, writer, createdAt, onSelect }) => {
  return (
    <li className={styles.comment}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
        <Dropdown className={styles.dropdown} onSelect={onSelect} />
      </div>
      <AuthorInfo
        className={styles.authorInfo}
        nickname={writer.nickname}
        image={writer.image}
        date={timeAgo(createdAt)}
      />
    </li>
  );
};

export default Comment;
