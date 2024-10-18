import { useState } from "react";

interface AddItemSharedData {
  productImage: string | undefined;
  setProductImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  productTitle: string;
  setProductTitle: React.Dispatch<React.SetStateAction<string>>;
  productDescription: string;
  setProductDescription: React.Dispatch<React.SetStateAction<string>>;
  productPrice: string | undefined;
  setProductPrice: React.Dispatch<React.SetStateAction<string | undefined>>;
  productTags: string[];
  setProductTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const useAddItemSharedData = (): AddItemSharedData => {
  const [productImage, setProductImage] = useState<string | undefined>(undefined);
  const [productTitle, setProductTitle] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string | undefined>(undefined);
  const [productTags, setProductTags] = useState<string[]>([]);

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
