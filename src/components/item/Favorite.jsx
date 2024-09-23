import './Favorite.css';
import heart from '../../assets/ic_heart.svg';

export default function Favorite({ favoriteCount }) {
  return (
    <div className="Favorite">
      <button className="Favorite-btn">
        <img src={heart} alt="좋아요 아이콘" />
        {favoriteCount}
      </button>
    </div>
  );
}
