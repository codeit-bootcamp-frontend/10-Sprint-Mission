import './Comments.css';
import Comment from './Comment';
import { getItemComments } from '../../services/itemApi';
import { useEffect, useState } from 'react';
import panda from '../../assets/enquiry_empty.svg';
import { Comment as CommentData } from '../../services/itemApiTypes';

interface CommentsProps {
  itemId: number;
}

export default function Comments({ itemId }: CommentsProps) {
  const [comments, setComments] = useState<CommentData[]>([]);

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
