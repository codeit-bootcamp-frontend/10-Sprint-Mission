import './Comment.css';
import avatar from '../../assets/avatar.svg';

export default function Comment() {
  return (
    <div className="Comment">
      <p className="Comment-content">혹시 사용기간이 어떻게 되실까요?</p>
      <div className="Comment-avatar-wrapper">
        <img src={avatar} alt="아바타" />
        <div className="Comment-etc">
          <span className="Comment-writer-nickname">똑똑한판다</span>
          <span className="Comment-created-at">1시간 전</span>
        </div>
      </div>
    </div>
  );
}
