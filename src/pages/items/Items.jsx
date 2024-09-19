import Header from "components/Header";
import AllProductsHeader from "components/items/AllProductsHeader";
import BestProductsHeader from "components/items/BestProductsHeader";
import ItemPageNation from "components/items/ItemPageNation";
import ProductCard from "components/items/ProductCard";
import { useItemsSharedData } from "components/items/useItemsSharedData";
import { Outlet } from "react-router-dom";

const Items = () => {
  const {
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
  } = useItemsSharedData();

  return (
    <div>
      <Header />
      <BestProductsHeader />
      <ProductCard 
        latestData={latestData} 
        setLatestData={setLatestData} 
        favoriteData={favoriteData} 
        setFavoriteData={setFavoriteData} 
        loading={loading} 
        setLoading={setLoading} 
        error={error} 
        setError={setError} 
        totalCount={totalCount} 
        setTotalCount={setTotalCount} 
        totalPage={totalPage} 
        setTotalPage={setTotalPage} 
        responsiveAllProductCount={responsiveAllProductCount} 
        setResponsiveAllProductCount={setResponsiveAllProductCount}
        responsiveFavoriteProductCount={responsiveFavoriteProductCount}
        setResponsiveFavoriteProductCount={setResponsiveFavoriteProductCount}
        sortProduct={sortProduct} 
        setSortProduct={setSortProduct} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        isEmptyHeart={isEmptyHeart} 
        setIsEmptyHeart={setIsEmptyHeart}
        isBestProduct={true}
      />
      <AllProductsHeader 
        responsiveAllProductCount={responsiveAllProductCount} 
        isDropdown={isDropdown} 
        setIsDropdown={setIsDropdown} 
        sortProduct={sortProduct} 
        setSortProduct={setSortProduct} 
      />
      <ProductCard 
        latestData={latestData} 
        setLatestData={setLatestData} 
        favoriteData={favoriteData} 
        setFavoriteData={setFavoriteData} 
        loading={loading} 
        setLoading={setLoading} 
        error={error} 
        setError={setError} 
        totalCount={totalCount} 
        setTotalCount={setTotalCount} 
        totalPage={totalPage} 
        setTotalPage={setTotalPage} 
        responsiveAllProductCount={responsiveAllProductCount} 
        setResponsiveAllProductCount={setResponsiveAllProductCount}
        responsiveFavoriteProductCount={responsiveFavoriteProductCount}
        setResponsiveFavoriteProductCount={setResponsiveFavoriteProductCount}
        sortProduct={sortProduct} 
        setSortProduct={setSortProduct} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        isEmptyHeart={isEmptyHeart} 
        setIsEmptyHeart={setIsEmptyHeart}
        isBestProduct={false}
      />
      <ItemPageNation 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        totalPage={totalPage} 
        maxVisiblePage={maxVisiblePage}
      />
    </div>
  );
}

export default Items;