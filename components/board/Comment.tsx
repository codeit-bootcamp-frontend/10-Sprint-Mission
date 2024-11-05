import Image from "next/image";
import Dropdown from "../ui/Dropdown";
import AuthorInfo from "../ui/AuthorInfo";
import { timeAgo } from "@/lib/formatDate";
import styles from "./Comment.module.css";
import kebabIcon from "@/public/ic_kebab.svg";
import { CommentProps } from "@/types/articleTypes";

interface Props extends Omit<CommentProps, "id" | "updatedAt"> {
  onSelect: (option: string) => void;
}

const options = {
  edit: "수정하기",
  remove: "삭제하기",
} as const;

const Comment = ({ content, writer, createdAt, onSelect }: Props) => {
  return (
    <li className={styles.comment}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
        <Dropdown
          className={styles.dropdown}
          onSelect={onSelect}
          options={options}
        >
          <Image
            src={kebabIcon}
            alt="수정/삭제 드롭다운 보이기"
            className={styles.kebab}
          />
        </Dropdown>
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
