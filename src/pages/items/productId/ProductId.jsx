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
import { API_USEDS_PRODUCT_INFORMATION, API_USER, API_USER_COMMENTS } from "config/api";

const ProductId = () => {
  const {
    productId,
    productName,
    productPrice,
    productDescription,
    productImage,
    productTags,
    productFavoriteCount,
    commentCount,
    commentData,
    setProductId,
    createAt,
    updateAt,
    ownerId,
    ownerIamge,
    ownerNickname,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductTags,
    setProductFavoriteCount,
    setCommentCount,
    setCommentData,
    setCreateAt,
    setUpdateAt,
    setOwnerId,
    setOwnerImage,
    setOwnerNickname,
  } = useProductIdState();

  const location = useLocation();
  const id = location.state.product.id;
  setOwnerId(location.state.product.ownerId);

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData(`${API_USEDS_PRODUCT_INFORMATION}/${id}`);
      const product = response.data.list[0];
      setProductName(product.name);
      setProductPrice(product.price);
      setProductDescription(product.description);
      setProductImage(product.images);
      setProductTags(product.tags);
      setProductFavoriteCount(product.favoriteCount);
    }

    asyncFunction();

  }, [id, setProductName, setProductPrice, setProductDescription, setProductImage, setProductTags, setProductFavoriteCount]);

  useEffect(() => {
    const asyncFunction = async () => {
      const responseUser = await fetchData(`${API_USER}`);
      setOwnerNickname(responseUser.data.nickname);
      setOwnerImage(responseUser.data.image);
      setCreateAt(responseUser.data.createdAt);
      setUpdateAt(responseUser.data.updatedAt);
    }

    asyncFunction();

  }, [setOwnerNickname, setOwnerImage, setCreateAt, setUpdateAt]);

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData(`${API_USER_COMMENTS}/${id}/comments`);
      setCommentCount(response.data.list.length);
      setCommentData(response.data.list);
    }

    asyncFunction();

  }, [id, setCommentCount, setCommentData]);

  return (
    <div>
      <Header />
      <ProductImage productImage={productImage} />
      <ProductSummary
        productName={productName}
        productPrice={productPrice}
        productDescription={productDescription}
        productTags={productTags}
        productFavoriteCount={productFavoriteCount}
        ownerNickname={ownerNickname}
        ownerIamge={ownerIamge}
        updateAt={updateAt}
      />
      <Inquire />
      {
        commentData && commentData.map((user, index) => (
          <InquireItem
            key={index}
            userNickname={user.writer.nickname}
            userImage={user.writer.image}
            updateTime={user.updatedAt}
          />
        ))
      }
      <BackButton />
    </div>
  );
};
export default ProductId;