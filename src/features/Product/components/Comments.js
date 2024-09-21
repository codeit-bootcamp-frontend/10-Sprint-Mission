import { useState, useEffect, useCallback } from "react";
import { getComments } from "../services/getProudct";
import { timeAgo } from "utils/commonUtils";
import Dropdown from "./Dropdown";
import inquiryEmptyImg from "assets/images/img_inquiry_empty.svg";
import styles from "./Comments.module.css";
import AuthorInfo from "./AuthorInfo";
import Textarea from "components/Textarea";
import Button from "components/Button";

const Comments = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleLoad = useCallback(async () => {
    const { list } = await getComments(itemId);
    setComments(list);
  }, [itemId]);

  const handleSelect = (id, option) => {
    if (option === "edit") {
      setEditingId(id);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  console.log(comments);

  return (
    <section>
      {comments.length ? (
        <ul className={styles.comments}>
          {comments.map(({ content, id, createdAt, writer }) => {
            if (id === editingId) {
              return (
                <li key={id} className={styles.comment}>
                  <Textarea value={content} className={styles.textarea} />
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
                        onClick={handleCancel}
                      >
                        취소
                      </button>
                      <Button className={styles.editButton}>수정완료</Button>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={id} className={styles.comment}>
                <div className={styles.contentContainer}>
                  <p className={styles.content}>{content}</p>
                  <Dropdown
                    className={styles.dropdown}
                    onSelect={(option) => handleSelect(id, option)}
                  />
                </div>
                <AuthorInfo
                  className={styles.authorInfo}
                  nickname={writer.nickname}
                  image={writer.image}
                  date={timeAgo(createdAt)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.inquiryEmpty}>
          <img
            className={styles.inquiryEmptyImg}
            src={inquiryEmptyImg}
            alt="문의 없음"
          />
          <span>아직 문의가 없어요</span>
        </div>
      )}
    </section>
  );
};

export default Comments;
