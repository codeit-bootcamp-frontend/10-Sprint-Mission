import './TagCard.css';
import deleteIcon from '../../assets/ic_X.svg';

function TagCard({ name }) {
  return (
    <div className="TagCard">
      <span>#{name}</span>
      <img src={deleteIcon} alt="삭제 아이콘" />
    </div>
  );
}

export default TagCard;
