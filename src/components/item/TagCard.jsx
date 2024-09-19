import './TagCard.css';
import deleteIcon from '../../assets/ic_X.svg';

function TagCard({ index, name, onDelete }) {
  const handleOnClick = () => {
    onDelete(index);
  };

  return (
    <div className="TagCard">
      <span>#{name}</span>
      <img src={deleteIcon} alt="삭제 아이콘" onClick={handleOnClick} />
    </div>
  );
}

export default TagCard;
