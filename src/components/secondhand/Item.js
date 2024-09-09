import { Link } from "react-router-dom";

import { convertToMoney } from "../../utils/util.js";
import heartIcon from "../../assets/heart_inactive.svg";

export default function Item({ data }) {
  const { id, name, description, price, images, favoriteCount } = data;
  return (
    <Link to={`/item/${id}`}>
      <img src={images[0]} alt={description} />
      <div>
        <span>{name}</span>
        <span>{convertToMoney(price)}</span>
        <div>
          <img src={heartIcon} alt="좋아요 수" />
          <span>{favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}
