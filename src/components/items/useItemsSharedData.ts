import { useState } from "react";

interface UseItemsSharedData {
  latestData: any[];
  setLatestData: React.Dispatch<React.SetStateAction<any[]>>;
  favoriteData: any[];
  setFavoriteData: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
  totalCount: number;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  setTotalPage: React.Dispatch<React.SetStateAction<number>>;
  responsiveAllProductCount: number;
  setResponsiveAllProductCount: React.Dispatch<React.SetStateAction<number>>;
  responsiveFavoriteProductCount: number;
  setResponsiveFavoriteProductCount: React.Dispatch<React.SetStateAction<number>>;
  sortProduct: string;
  setSortProduct: React.Dispatch<React.SetStateAction<string>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  isEmptyHeart: boolean;
  setIsEmptyHeart: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdown: boolean;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  maxVisiblePage: number;
  setMaxVisiblePage: React.Dispatch<React.SetStateAction<number>>;
}

export const useItemsSharedData = (): UseItemsSharedData => {
  const [latestData, setLatestData] = useState<any[]>([]);
  const [favoriteData, setFavoriteData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [responsiveAllProductCount, setResponsiveAllProductCount] = useState<number>(10);
  const [responsiveFavoriteProductCount, setResponsiveFavoriteProductCount] = useState<number>(4);
  const [sortProduct, setSortProduct] = useState<string>('최신순');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isEmptyHeart, setIsEmptyHeart] = useState<boolean>(true);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [maxVisiblePage, setMaxVisiblePage] = useState<number>(5);

  return {
    latestData,
    setLatestData,
    favoriteData,
    setFavoriteData,
    loading,
    setLoading,
    error,
    setError,
    totalCount,
    setTotalCount,
    totalPage,
    setTotalPage,
    responsiveAllProductCount,
    setResponsiveAllProductCount,
    responsiveFavoriteProductCount,
    setResponsiveFavoriteProductCount,
    sortProduct,
    setSortProduct,
    pageNumber,
    setPageNumber,
    isEmptyHeart,
    setIsEmptyHeart,
    isDropdown,
    setIsDropdown,
    maxVisiblePage,
    setMaxVisiblePage,
  };
}
