import { useState } from "react";

export const useAddItemSharedData = () => {
  const [productImage, setProductImage] = useState();
  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [productTags, setProductTags] = useState([]);

  return {
    productImage,
    setProductImage,
    productTitle,
    setProductTitle,
    productPrice,
    setProductPrice,
    productDescription,
    setProductDescription,
    productTags,
    setProductTags
  };
}