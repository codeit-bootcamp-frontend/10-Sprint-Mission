import { useState } from "react";

interface ProductState {
  productId: string | undefined;
  productName: string | undefined;
  productPrice: number | undefined;
  productDescription: string | undefined;
  productImage: string | undefined;
  productTags: string[];
  productFavoriteCount: number | undefined;
  commentCount: number | undefined;
  commentData: string[];
  createAt: string | undefined;
  updateAt: string;
  ownerId: string | undefined;
  ownerImage: string;
  ownerNickname: string;
}

interface ProductStateSetters {
  setProductId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setProductName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setProductPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProductDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  setProductImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  setProductTags: React.Dispatch<React.SetStateAction<string[]>>;
  setProductFavoriteCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCommentCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCommentData: React.Dispatch<React.SetStateAction<string[]>>;
  setCreateAt: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUpdateAt: React.Dispatch<React.SetStateAction<string>>;
  setOwnerId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOwnerImage: React.Dispatch<React.SetStateAction<string>>;
  setOwnerNickname: React.Dispatch<React.SetStateAction<string>>;
}

export const useProductIdState = (): ProductState & ProductStateSetters => {
  const [productId, setProductId] = useState<string | undefined>();
  const [productName, setProductName] = useState<string | undefined>();
  const [productPrice, setProductPrice] = useState<number | undefined>();
  const [productDescription, setProductDescription] = useState<string | undefined>();
  const [productImage, setProductImage] = useState<string | undefined>();
  const [productTags, setProductTags] = useState<string[]>([]);
  const [productFavoriteCount, setProductFavoriteCount] = useState<number | undefined>();
  const [commentCount, setCommentCount] = useState<number | undefined>();
  const [commentData, setCommentData] = useState<string[]>([]);
  const [createAt, setCreateAt] = useState<string | undefined>();
  const [updateAt, setUpdateAt] = useState<string>('2024. 01. 02');
  const [ownerId, setOwnerId] = useState<string | undefined>();
  const [ownerImage, setOwnerImage] = useState<string>('assets/imgs/user_icon.svg');
  const [ownerNickname, setOwnerNickname] = useState<string>('총명한 판다');

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
    createAt,
    updateAt,
    ownerId,
    ownerImage,
    ownerNickname,
    setProductId,
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
  }
}
