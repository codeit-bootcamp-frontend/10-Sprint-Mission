import style from "./Card.module.css";
import Favorite from "./Favorite";

function Card({ item, imgSize }) {
  const { favoriteCount, images, price, name } = item;
  const addDefaultImg = (e) => {e.currentTarget.src = "/images/free-icon-no-pictures-3875148.png"} 
  return (
    <div className={style.card}>
      <img
        className={style.cardImg}
        style={{ width: imgSize, height: imgSize }}
        src={images[0]} onError={addDefaultImg}
        alt={name}
      />
      <div className={style.cardTxt}>
        <div className={style.title}>{name}</div>
        <div className={style.price}>{price}</div>
        <Favorite favoriteCount={favoriteCount}></Favorite>
      </div>
    </div>
  );
}

export default Card;
