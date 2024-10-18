import styles from './ProductSummary.module.css';
import { useState } from 'react';
import { ReactComponent as EmptyHeart } from 'assets/imgs/empty_heart.svg';
import { ReactComponent as FillHeart } from 'assets/imgs/fill_heart.svg';

interface ProductSummaryProps {
  productName?: string;
  productPrice?: number;
  productDescription?: string;
  productTags?: string[];
  productFavoriteCount?: number;
  ownerNickname?: string;
  ownerImage?: string;
  updateAt?: string;
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  productName = '', 
  productPrice = 0, 
  productDescription = '', 
  productTags = [],
  productFavoriteCount = 0,
  ownerNickname = '',
  ownerImage = '',
  updateAt = '',
}) => {
  const [isEmptyHeart, setIsEmptyHeart] = useState(true);

  const onClick = () => {
    setIsEmptyHeart(!isEmptyHeart);
  }

  return (
    <div className={styles['container']}>
      <h4 className={styles['product-name']}>{productName}</h4>
      <p className={styles['product-price']}>{Number(productPrice).toLocaleString()}</p>
      <hr className={styles['line']} />
      <p className={styles['product-description-title']}>상품 소개</p>
      <p className={styles['product-description']}>{productDescription}</p>
      <p className={styles['product-tag-title']}>상품 태그</p>
      <div className={styles['product-tag-container']}>
        {productTags.map((tag, index) => (
          <span key={index} className={styles['product-tag']}>#{tag}</span>
        ))}
      </div>
      {productTags.length === 0 && <span className={styles['empty-tag']}></span>}
      <div className={styles['owner-container']}>
        <div className={styles['owner-card']}>
          <img className={styles['owner-image']} src='assets/imgs/user_icon.svg' alt="owner" />
          <div className={styles['owner-content']}>
            <p className={styles['owner-nickname']}>{ownerNickname}</p>
            <p className={styles['owner-updateAt']}>{updateAt}</p>
          </div>
        </div>
        <span
          className={styles['product-favorite-count']}
          onClick={onClick}
        >
          {isEmptyHeart ? <EmptyHeart/> : <FillHeart/>}
          {productFavoriteCount}
        </span>
      </div>
    </div>
  );
};

export default ProductSummary;
