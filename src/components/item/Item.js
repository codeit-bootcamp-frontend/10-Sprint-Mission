import './Item.css';
import testImg from '../../assets/test_img.png';
import heart from '../../assets/ic_heart.svg';

function Item() {
  return (
    <div className="Item">
      <img className="Item-img" src={testImg} alt="test" />
      <div className="Item-description">
        <span className="Item-title">아이패드 미니 팝니다</span>
        <span className="Item-price">500,000원</span>
        <div className="Item-description-favorite">
          <img src={heart} alt="좋아요 아이콘" />
          <span className="Item-favorite-count">250</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
