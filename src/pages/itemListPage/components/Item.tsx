import { Link } from "react-router-dom";

import heartIcon from "../../../assets/heart_inactive.svg";
import "./Item.css";

export default function Item({ data }) {
  const { id, name, description, price, images, favoriteCount } = data;
  return (
    <Link className="item" to={`/items/${id}`}>
      <img className="item__image" src={images[0]} alt={description} />
      <div className="item__content">
        <span className="item__title">{name}</span>
        <span className="item__price">{price.toLocaleString() + "원"}</span>
        <div className="item__favorite">
          <img className="item__favoriteIcon" src={heartIcon} alt="좋아요 수" />
          <span>{favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}
