import { useState, useEffect, useCallback } from "react";
import { getComments } from "../services/getProudct";
import { formatDate } from "utils/commonUtils";
import inquiryEmptyImg from "assets/images/img_inquiry_empty.svg";
import styles from "./Comments.module.css";
import kebabIcon from "assets/images/ic_kebab.svg";
import AuthorInfo from "./AuthorInfo";

const Comments = ({ itemId }) => {
  const [comments, setComments] = useState([]);

  const handleLoad = useCallback(async () => {
    const { list } = await getComments(itemId);
    setComments(list);
  }, [itemId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  console.log(comments);

  return (
    <section>
      {comments.length ? (
        <ul className={styles.comments}>
          {comments.map(({ content, id, createdAt, writer }) => (
            <li key={id} className={styles.comment}>
              <div className={styles.contentContainer}>
                <p className={styles.content}>{content}</p>
                <img
                  src={kebabIcon}
                  alt="수정/삭제 드롭다운 보이기"
                  className={styles.kebab}
                />
              </div>
              <AuthorInfo
                className={styles.authorInfo}
                nickname={writer.nickname}
                image={writer.image}
                date={formatDate(createdAt)}
              />
            </li>
          ))}
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
