import { css } from '@emotion/react';
import likeButton from '../assets/images/ic-heart.svg';

function Card({ image, title, price, like }) {
  return (
    <div>
      <figure css={productImg}>
        <img src={image} alt={title} />
      </figure>
      <div>
        <p css={infoTitle}>{title}</p>
        <p css={infoPrice}>{price}원</p>
        <div css={infoLike}>
          <img src={likeButton} alt='좋아요 아이콘' />
          <span>{like}</span>
        </div>
      </div>
    </div>
  );
}

const productImg = css`
  padding: 0;
  margin: 0;
  width: 28.2rem;
  height: 28.2rem;
  border-radius: 1.6rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const infoTitle = css`
  font-size: 1.4rem;
  font-weight: 500;
  color: #1f2937;
  margin: 1.6rem 0;
`;

const infoPrice = css`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0.6rem 0;
`;

const infoLike = css`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export default Card;
