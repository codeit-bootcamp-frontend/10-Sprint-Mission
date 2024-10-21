import './TagCard.css';
import deleteIcon from '../../assets/ic_X.svg';

interface TagCardProps {
  index?: number;
  name: string;
  onDelete?: (index: number) => void;
}

function TagCard({ index, name, onDelete }: TagCardProps) {
  const handleOnClick = () => {
    if (onDelete && index !== undefined) {
      onDelete(index);
    }
  };

  return (
    <div className="TagCard">
      <span>#{name}</span>
      {onDelete && (
        <button
          className="TagCard-btn"
          onClick={handleOnClick}
          aria-label="삭제"
        >
          <img src={deleteIcon} alt="삭제 아이콘" />
        </button>
      )}
    </div>
  );
}

export default TagCard;
