import { useState } from "react";

export const useAddItemSharedData = () => {
  const [productImage, setProductImage] = useState();
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productTags, setProductTags] = useState([]);

  return {
    productImage,
    setProductImage,
    productTitle,
    setProductTitle,
    productDescription,
    setProductDescription,
    productPrice,
    setProductPrice,
    productTags,
    setProductTags
  };
}