import './Comment.css';
import avatar from '../../assets/avatar.svg';
import { formatDateToTimeAgo } from '../../utils/dateFormat';
import { Comment as CommentData } from '../../services/itemApiTypes';

interface CommentProps
  extends Pick<CommentData, 'id' | 'content' | 'createdAt' | 'writer'> {}

export default function Comment({ content, createdAt, writer }: CommentProps) {
  return (
    <div className="Comment">
      <p className="content">{content}</p>
      <div className="avatar-wrapper">
        <img className="avatar-img" src={writer.image || avatar} alt="아바타" />
        <div className="etc">
          <span className="writer-nickname">{writer.nickname}</span>
          <span className="created-at">{formatDateToTimeAgo(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
