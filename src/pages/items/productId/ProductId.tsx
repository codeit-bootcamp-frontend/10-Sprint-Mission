import Header from "components/Header";
import BackButton from "components/items/productId/BackButton";
import Inquire from "components/items/productId/Inquire";
import InquireItem from "components/items/productId/InquireItem";
import ProductImage from "components/items/productId/ProductImage";
import ProductSummary from "components/items/productId/ProductSummary";
import { useProductIdState } from "components/items/productId/useProductIdState";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchData } from "api/fetchData";
import { API_USEDS_PRODUCT_INFORMATION, API_USER_COMMENTS } from "config/api";
import styles from './ProductId.module.css';
import Line from "components/items/productId/Line";
import { ReactComponent as NoInquire } from 'assets/imgs/no_inquire.svg';

interface Comment {
  content: string;
  writer: {
    nickname: string;
    image: string;
  };
  updatedAt: string;
}

interface Product {
  name: string;
  price: number;
  description: string;
  images: string;
  tags: string[];
  favoriteCount: number;
}

const ProductId = () => {
  const {
    productName,
    productPrice,
    productDescription,
    productImage,
    productTags,
    productFavoriteCount,
    commentData,
    updateAt,
    ownerImage,
    ownerNickname,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductTags,
    setProductFavoriteCount,
    setCommentCount,
    setCommentData,
  } = useProductIdState();

  const location = useLocation();
  const id = (location.state as { product: { id: string } }).product.id;

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData({ url: `${API_USEDS_PRODUCT_INFORMATION}/${id}`, query: { productId: id } });
      const product: Product = response.data;
      setProductName(product.name);
      setProductPrice(product.price);
      setProductDescription(product.description);
      setProductImage(product.images);
      setProductTags(product.tags);
      setProductFavoriteCount(product.favoriteCount);
    };

    asyncFunction();
  }, [id, setProductName, setProductPrice, setProductDescription, setProductImage, setProductTags, setProductFavoriteCount]);

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData({ url: `${API_USER_COMMENTS}/${id}/comments`, query: { productId: id, limit: 3 } });
      setCommentCount(response.data.list.length);
      setCommentData(response.data.list);
    };

    asyncFunction();
  }, [id, setCommentCount, setCommentData]);

  return (
    <div>
      <Header />
      <div className={styles['card-container']}>
        <ProductImage productImage={productImage} />
        <ProductSummary
          productName={productName}
          productPrice={productPrice}
          productDescription={productDescription}
          productTags={productTags}
          productFavoriteCount={productFavoriteCount}
          ownerNickname={ownerNickname}
          ownerImage={ownerImage}
          updateAt={updateAt}
        />
      </div>
      <Line marginTop={40} marginBottom={40} />
      <Inquire />
      {
        commentData && commentData.map((user: any, index: number) => (
          <>
            <InquireItem
              key={index}
              content={user.content}
              userNickname={user.writer.nickname}
              userImage={user.writer.image}
              updateAt={user.updatedAt}
              commentData={commentData}
              setCommentData={setCommentData}
            />
            <Line marginTop={12} marginBottom={24} />
          </>
        ))
      }
      {
        commentData.length <= 0 && <div className={styles['no-inquire']}><NoInquire />아직 문의가 없어요</div>
      }
      <BackButton />
    </div>
  );
};

export default ProductId;
