import style from "./Favorite.module.css";

function Favorite({ favoriteCount }) {
  return (
    <div className={style.favorite}>
      <img src="/images/heart-icon.svg" />
      <div>{favoriteCount}</div>
    </div>
  );
}

export default Favorite;
