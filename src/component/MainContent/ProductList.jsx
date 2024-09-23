// ProductList.js
import favoriteIcon from "../../assets/Icon.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const EntirePicture = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`;

const ItemTitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
`;

const FavoriteImg = styled.img`
  width: 13.4px;
  height: 11.65px;
  margin-right: 3px;
`;

const ProductImg = styled.img`
  width: 221px;
  height: 221px;
  cursor: pointer;
`;

const ProductList = ({ sortedProducts }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <EntirePicture>
      {!sortedProducts ? (
        <p>No products available</p>
      ) : (
        sortedProducts.map((product) => (
          <div key={product.id}>
            {!product.images ? (
              <p>No image available</p>
            ) : (
              <ProductImg
                src={product.images[0]}
                alt={product.name}
                onClick={() => handleClick(product.id)}
              />
            )}
            <ItemTitle>{product.name}</ItemTitle>
            <Price>{product.price.toLocaleString()} 원</Price>
            <FavoriteIcon>
              <FavoriteImg src={favoriteIcon} alt="좋아요" />
              <p>{product.favoriteCount}</p>
            </FavoriteIcon>
          </div>
        ))
      )}
    </EntirePicture>
  );
};

export default ProductList;
