import './TagCard.css';
import deleteIcon from '../../assets/ic_X.svg';

function TagCard({ index, name, onDelete }) {
  const handleOnClick = () => {
    onDelete(index);
  };

  return (
    <div className="TagCard">
      <span>#{name}</span>
      <button className="TagCard-btn" onClick={handleOnClick} aria-label="삭제">
        <img src={deleteIcon} alt="삭제 아이콘" />
      </button>
    </div>
  );
}

export default TagCard;
