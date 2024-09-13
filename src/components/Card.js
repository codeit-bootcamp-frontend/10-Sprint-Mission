import style from "./Card.module.css";

function Card({ item, imgSize }) {
  const { favoriteCount, images, price, name } = item;

  return (
    <div className={style.card}>
      <img
        className={style.cardImg}
        style={{ width: imgSize }}
        src={images[0]}
      />
      <div className={style.cardTxt}>
        <div>{name}</div>
        <div>{price}</div>
        <div>{favoriteCount}</div>
      </div>
    </div>
  );
}

export default Card;
