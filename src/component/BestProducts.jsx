import favoriteIcon from "../assets/Icon.png";
import styled from "styled-components";

const BestProductDiv = styled.div`
  margin-right: 24px;
`;

const BestProduct = styled.section`
  display: flex;
  width: 100%;
`;

const BestProductImg = styled.img`
  width: 282px;
  height: 282px;

  @media (max-width: 768px) {
    width: 343px;
    height: 343px;
  }
`;

const ItemTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

const FavoriteImg = styled.img`
  width: 13.4px;
  height: 11.65px;
  margin-right: 3px;
`;
const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const BestProducts = ({ bestProducts }) => {
  return (
    <BestProduct>
      {!bestProducts ? (
        <p>No products available</p>
      ) : (
        bestProducts.map((product) => (
          <BestProductDiv key={product.id}>
            {product.images.length > 0 ? (
              <BestProductImg src={product.images[0]} alt={product.name} />
            ) : (
              <p>No image available</p>
            )}
            <ItemTitle>{product.name} 팝니다</ItemTitle>
            <Price>{product.price.toLocaleString()} 원</Price>
            <FavoriteIcon>
              <FavoriteImg src={favoriteIcon} alt="좋아요" />
              <p>{product.favoriteCount}</p>
            </FavoriteIcon>
          </BestProductDiv>
        ))
      )}
    </BestProduct>
  );
};

export default BestProducts;
