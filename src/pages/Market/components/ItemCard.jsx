import React from 'react';
import likeicon from '../../../assets/images/likeicon.png';
import '../Market.css';
function ItemCard( { item }) {
    return (
        <div className="card-container">
            <img className="item-img" src={item.images[0]} alt={item.name}></img>
            <div className="item-info">
                <div className="title">{item.name}</div>
                <div className="price">{item.price}원</div>
                <div className="like-wrap">
                    <img className="like-icon" src={likeicon} alt="좋아요 아이콘"></img>
                    <div className="like-count">{item.favoriteCount}</div>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCard;