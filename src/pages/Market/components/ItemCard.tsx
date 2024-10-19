import React from 'react';
import likeIcon from '../../../assets/images/likeicon.png';
import styles from '../Market.module.css';
import { Link } from 'react-router-dom';

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    images: string[];
    ownerId: number;
    ownerNickname: string;
    favoriteCount: number;
    createdAt: string;
}

interface ItemCardProps {
    item: Item; 
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <Link to={`/items/${item.id}`} className={styles.cardContainer}>
            <img className={styles.itemImg} src={item.images[0]} alt={item.name} />
            <div className={styles.itemInfo}>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.price}>{item.price.toLocaleString('ko-KR')}원</div>
                <div className={styles.likeWrap}>
                    <img className={styles.likeIcon} src={likeIcon} alt="좋아요 아이콘" />
                    <div className={styles.likeCount}>{item.favoriteCount}</div>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;