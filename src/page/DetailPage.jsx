import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailProduct, fetchProductsComments } from "../api";
import styled from "styled-components";
import HeartImage from "../assets/Heart.png";
import commentPatchRmbtn from "../assets/commentPatchRmbtn.png";
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
  margin-bottom: 40px;
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

const Favorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  width: 87px;
  height: 40px;
  border-radius: 20px;
`;

const HeartImg = styled.img`
  width: 26.8px;
  height: 23.3px;
  margin-right: 4px;
`;
const LeftlineFavorite = styled.div`
  width: 111px;
  border-left: 1px solid #e5e7eb;
  padding-left: 24px;
`;
const InquiryHagi = styled.p`
  margin-top: 40px;
  width: 56px;
  height: 26px;
  font-size: 16px;
`;
const InquiryArea = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 16px 24px;
  color: 9ca3af;
  border: 1px solid #ffffff;
  resize: none;
`;

const InquiryButton = styled.button`
  margin-top: 16px;
  width: 74px;
  height: 42px;
  color: #ffffff;
  background-color: #9ca3af;
  border-radius: 8px;
  border: 1px solid #ffffff;
`;

const InquiryProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (!dateString) return "";
  return date.toISOString().split("T")[0];
};

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

  const [comments, setComments] = useState({
    list: [],
    nextCursor: null,
  });

  useEffect(() => {
    const fetchProductsDes = async () => {
      try {
        const data = await fetchDetailProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching ProductDes:", error);
      }
    };
    fetchProductsDes();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchProductsComments(id);
        console.log("data:", data.list[0].content);
        setComments(data);
      } catch (error) {
        console.error("Error fetching ProductDes:", error);
      }
    };
    fetchComments();
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
              {product.tags.length === 0 ? (
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
          </ProductIntro>
          <hr></hr>
        </section>
        <section>
          <InquiryHagi>문의하기</InquiryHagi>
          <InquiryArea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."></InquiryArea>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <InquiryButton>등록</InquiryButton>
          </div>
        </section>
        <section>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "24px",
              }}
            >
              {comments && comments.list && comments.list[0] && (
                <p>{comments.list[0].content}</p>
              )}

              <img src={commentPatchRmbtn}></img>
            </div>
            <div style={{ display: "flex", marginTop: "24px" }}>
              <img src={ProfileImg} />
              <InquiryProfile>
                {comments &&
                  comments.list &&
                  comments.list[0] &&
                  comments.list[0].writer.nickname}
                <p style={{ marginTop: "4px" }}>1시간 전</p>
              </InquiryProfile>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default DetailPage;
