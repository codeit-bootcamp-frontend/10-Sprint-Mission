import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailProduct } from "../api.js";
import styled from "styled-components";
import Comment from "../component/DetailPage/Comment.jsx";
import ProductIntro from "../component/DetailPage/ProductIntro.jsx";
import Inquiry from "../component/DetailPage/Inquiry.jsx";

const MainContainer = styled.main`
  margin-top: 24px;
  margin-left: 360px;
  margin-right: 360px;
  margin-bottom: 228px;

  @media (max-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const DetailPage = () => {
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

  return (
    <MainContainer>
      <ProductIntro product={product} />
      <Inquiry />
      <Comment id={id} />
    </MainContainer>
  );
};

export default DetailPage;
