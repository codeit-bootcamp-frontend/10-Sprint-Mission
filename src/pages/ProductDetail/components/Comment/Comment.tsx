import React, { useState, useEffect, useCallback } from 'react';
import styles from './Comment.module.css';
import { useParams } from 'react-router-dom';
import { postProductComment, getProductComments } from '../../../../api/itemApi';
import CommentItem from '../../components/CommentItem/CommentItem';

function Comment() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const { productId } = useParams();
  const [itemList, setItemList] = useState([]);
  const LIMIT = 6;
  const [cursor, setCursor] = useState(null);
  
  const handleLoad = useCallback(async () => {
      const comments = await getProductComments(productId, { limit: LIMIT, cursor:0 });
      setItemList(comments.list); 
      console.log(comments.list)
  }, [productId, cursor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment', value);
    await postProductComment(productId, formData);
    setValue('');
    await handleLoad(); 
  };


  useEffect(() => {
    setIsValid(value.trim() !== ''); 
  }, [value]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className={styles.commentContainer}>
      <label>문의하기</label>
      <form className={styles.commentPost} onSubmit={handleSubmit}>
        <textarea
          className={styles.commentInput}
          name='comment'
          value={value}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} disabled={!isValid}>
            등록
          </button>
        </div>
      </form>
      
      <div className={styles.commentList}>
          {itemList?.map((item) => (
            <CommentItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default Comment;
