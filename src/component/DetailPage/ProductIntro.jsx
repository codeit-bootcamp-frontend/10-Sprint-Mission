import styled from "styled-components";
import HeartImage from "../../assets/Heart.png";
import ProfileImg from "../../assets/profile.png";

const ProductIntr = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ProductDes = styled.div`
  margin-left: 24px;
  height: 496px;
  hr {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 340px;
  }
`;
const ProductImg = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 28.59px;
  @media (max-width: 768px) {
    width: 340px;
    height: 340px;
  }
`;
const ProductTitle = styled.p`
  width: 100%;
  height: 48px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;
const ProductPrice = styled.p`
  height: 48px;
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: left;
  margin-bottom: 16px;
`;

const ProductDetailIntro = styled.p`
  height: 26px;

  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;

  @media (max-width: 768px) {
    width: 340px;
  }
`;

const ProductDetailDes = styled.p`
  width: 690px;
  height: 104px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4b5563;
`;

const ProductTagTitle = styled.p`
  margin-top: 24px;
  width: 690px;
  height: 26px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;
const ProductTag = styled.p`
  display: inline-block;
  margin-top: 16px;
  height: 36px;
  padding: 6px 16px 6px 16px;
  border-radius: 26px;
  background-color: #f3f4f6;
`;

const ProductAuthor = styled.p`
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
`;

const NameUpdateAt = styled.p`
  margin-left: 16px;
`;

const AuthorName = styled.p`
  margin-bottom: 2px;
`;
const LeftlineFavorite = styled.div`
  width: 111px;
  border-left: 1px solid #e5e7eb;
  padding-left: 24px;
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  height: 40px;
  border-radius: 20px;
`;

const HeartImg = styled.img`
  margin-right: 4px;
`;

const formatDate = (dateString) => {
  //2024-07-29T05:45:03.250Z 이거면 2024-07-29 14:45:03
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const ProductIntro = ({ product }) => {
  return (
    <section>
      <ProductIntr>
        <ProductImg src={product.images[0]} alt="제품 이미지" />
        <ProductDes>
          <ProductTitle>{product.name} 팔아요</ProductTitle>
          <ProductPrice>{product.price.toLocaleString()} 원</ProductPrice>
          <hr></hr>
          <ProductDetailIntro>상품 소개</ProductDetailIntro>
          <ProductDetailDes>{product.description}</ProductDetailDes>
          <ProductTagTitle>상품 태그</ProductTagTitle>
          {!product.tags ? (
            <ProductTag>태그 없음</ProductTag>
          ) : (
            product.tags.map((tag, index) => (
              <ProductTag key={index}>#{tag}</ProductTag>
            ))
          )}

          <ProductAuthor>
            <div style={{ display: "flex" }}>
              <img src={ProfileImg} alt="Profile" />
              <NameUpdateAt>
                <AuthorName>총명한판다</AuthorName>
                <p>{formatDate(product.updatedAt)}</p>
              </NameUpdateAt>
            </div>
            <LeftlineFavorite>
              <Favorite>
                <HeartImg src={HeartImage} alt="좋아요버튼" />
                {product.favoriteCount}
              </Favorite>
            </LeftlineFavorite>
          </ProductAuthor>
        </ProductDes>
      </ProductIntr>
      <hr></hr>
    </section>
  );
};

export default ProductIntro;
