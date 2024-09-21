import { useState } from "react";

export const useProductIdState = () => {
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImage, setProductImage] = useState();
  const [productTags, setProductTags] = useState();
  const [productFavoriteCount, setProductFavoriteCount] = useState();
  const [commentCount, setCommentCount] = useState();
  const [commentData, setCommentData] = useState();

  return {
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
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductTags,
    setProductFavoriteCount,
    setCommentCount,
    setCommentData,
  }
}