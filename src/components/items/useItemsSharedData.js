import { useState } from "react"

export const useItemsSharedData = () => {
  const [latestData, setLatestData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [responsiveAllProductCount, setResponsiveAllProductCount] = useState(10);
  const [responsiveFavoriteProductCount, setResponsiveFavoriteProductCount] = useState(4);
  const [sortProduct, setSortProduct] = useState('최신순');
  const [pageNumber, setPageNumber] = useState(1);
  const [isEmptyHeart, setIsEmptyHeart] = useState(true);
  const [isDropdown, setIsDropdown] = useState(false);

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
  };
}