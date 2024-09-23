import './Comments.css';
import Comment from './Comment';
import { getItemComments } from '../../services/itemApi';
import { useEffect, useState } from 'react';
import panda from '../../assets/enquiry_empty.svg';

export default function Comments({ itemId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { list } = await getItemComments(itemId);
      setComments(list);
    };

    fetchComments();
  }, [itemId]);

  return (
    <section className="Comments">
      {comments.length ? (
        comments.map((comment) => <Comment key={comment.id} {...comment} />)
      ) : (
        <div className="empty">
          <img className="empty-img" src={panda} alt="판다 아이콘" />
          <p className="empty-description">아직 문의가 없어요</p>
        </div>
      )}
    </section>
  );
}
