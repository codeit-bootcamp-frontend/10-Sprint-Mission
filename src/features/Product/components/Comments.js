import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "shared/constants/url";
import { fetchData } from "shared/services/fetchData";
import inquiryEmptyImg from "assets/images/img_inquiry_empty.svg";
import styles from "./Comments.module.css";
import EditingComment from "./EditingComment";
import Comment from "./Comment";

const Comments = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleLoad = useCallback(async () => {
    const url = `${BASE_URL}/${itemId}/comments`;
    const { list } = await fetchData(url, {
      query: {
        limit: 5,
      },
    });
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

  return (
    <section>
      {comments.length ? (
        <ul className={styles.comments}>
          {comments.map(({ id, ...comment }) =>
            id === editingId ? (
              <EditingComment key={id} onCancel={handleCancel} {...comment} />
            ) : (
              <Comment
                key={id}
                onSelect={(option) => handleSelect(id, option)}
                {...comment}
              />
            )
          )}
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
