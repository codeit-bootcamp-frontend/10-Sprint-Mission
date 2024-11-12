import { useState } from "react";
import EditCommentForm from "./EditCommentForm";
import Comment from "./Comment";
import styles from "./Comments.module.css";
import replyEmptyImg from "@/public/Img_reply_empty.svg";
import Image from "next/image";
import { CommentProps } from "@/types/articleTypes";

interface CommentsProps {
  comments: CommentProps[];
  onUpdate: (id: number | null, value: string) => void;
}

const Comments = ({ comments, onUpdate }: CommentsProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSelect = (id: number, option: string) => {
    if (option === "edit") {
      setEditingId(id);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleUpdate = (value: string) => {
    onUpdate(editingId, value);
    setEditingId(null);
  };

  return (
    <section>
      {comments.length ? (
        <ul className={styles.comments}>
          {comments.map(({ id, ...comment }: CommentProps) =>
            id === editingId ? (
              <EditCommentForm
                key={id}
                onCancel={handleCancel}
                onUpdate={handleUpdate}
                {...comment}
              />
            ) : (
              <Comment
                key={id}
                onSelect={(option: string) => handleSelect(id, option)}
                {...comment}
              />
            )
          )}
        </ul>
      ) : (
        <div className={styles.replyEmpty}>
          <Image
            className={styles.replyEmptyImg}
            src={replyEmptyImg}
            alt="댓글 없음"
          />
          <span className={styles.replyEmptyMessage}>
            아직 댓글이 없어요,
            <br />
            지금 댓글을 달아보세요!
          </span>
        </div>
      )}
    </section>
  );
};

export default Comments;
