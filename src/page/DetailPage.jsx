import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailProduct } from "../api";
import styled from "styled-components";
import ProfileImg from "../assets/profile.png";
const Container = styled.div`
  margin-top: 24px;
  margin-left: 360px;
  margin-right: 360px;
  margin-bottom: 228px;
`;

const ProductImg = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 28.59px;
`;

const ProductIntro = styled.div`
  display: flex;
`;

const ProductDes = styled.div`
  margin-left: 24px;
  width: 690px;
  height: 496px;
`;

const ProductTitle = styled.p`
  width: 199px;
  height: 48px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

const ProductPrice = styled.p`
  width: 206px;
  height: 48px;
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: left;
  margin-bottom: 16px;
`;

const ProductDetailIntro = styled.p`
  height: 26px;
  width: 690px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
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

const DetailPage = () => {
  // useParams 훅을 사용하여 URL 파라미터를 추출
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    tags: [],
    images: [],
    favoriteCount: 0,
    createdAt: "",
    updatedAt: "",
    isFavorite: false,
  });
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const data = await fetchDetailProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching best products:", error);
      }
    };
    fetchBestProducts();
  }, [id]);
  return (
    <Container>
      <main>
        <section>
          <ProductIntro>
            <ProductImg src={product.images[0]} alt="제품 이미지" />
            <ProductDes>
              <ProductTitle>{product.name} 팔아요</ProductTitle>
              <ProductPrice>{product.price.toLocaleString()} 원</ProductPrice>
              <hr></hr>
              <ProductDetailIntro>상품 소개</ProductDetailIntro>
              <ProductDetailDes>{product.description}입니다.</ProductDetailDes>
              <ProductTagTitle>상품 태그</ProductTagTitle>
              {!product.tags ? (
                <p>태그 없음</p>
              ) : (
                product.tags.map((tag, index) => <p key={index}>{tag}</p>)
              )}

              <div></div>
            </ProductDes>
          </ProductIntro>
        </section>
        <section></section>
        <section></section>
      </main>
    </Container>
  );
};

export default DetailPage;
