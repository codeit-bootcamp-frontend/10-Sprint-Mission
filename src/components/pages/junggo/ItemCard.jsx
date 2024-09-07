import React from "react";
import "./ItemCard.css";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={item.name} className="itemImage" />
      <div className="item-container">
        <h2 className="itemName">{item.name} 팝니다</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="favoriteCheck">
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
