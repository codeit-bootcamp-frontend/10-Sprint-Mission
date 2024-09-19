import { fetchData } from "api/fetchData";
import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { useEffect } from "react";
import styles from './ProductCard.module.css';
import { ReactComponent as EmptyHeart } from 'assets/imgs/empty_heart.svg';
import { ReactComponent as FillHeart } from 'assets/imgs/fill_heart.svg';
import { Link } from "react-router-dom";

const ProductCard = ({
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
  setTotalPage,
  responsiveAllProductCount,
  setResponsiveAllProductCount,
  responsiveFavoriteProductCount,
  setResponsiveFavoriteProductCount,
  sortProduct,
  pageNumber,
  isEmptyHeart,
  setIsEmptyHeart,
  isBestProduct,
}) => {

  useEffect(() => {
    const asyncFetch = async () => {
      const response1 = await fetchData(API_USEDS_GOODS_PRODUCTS);
      let totalCount = response1.data.totalCount;
      const response2 = await fetchData(API_USEDS_GOODS_PRODUCTS, { pageSize: totalCount });
      const responseFiltered = response2.data.list.filter((product) => {
        if (product.name !== '상품 이름' || !product.name) {
          return true;
        } else {
          setTotalCount(totalCount - 1);
          return false;
        }
      });
      setLatestData(responseFiltered);
      setFavoriteData([...responseFiltered].sort((a, b) => b.favoriteCount - a.favoriteCount));
      setLoading(response2.loading);
      setError(response2.error);
    }

    asyncFetch();
  }, [setLatestData, setFavoriteData, setLoading, setError, setTotalCount]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setResponsiveAllProductCount(4);
        setResponsiveFavoriteProductCount(1);
      } else if (window.innerWidth < 1200) {
        setResponsiveAllProductCount(6);
        setResponsiveFavoriteProductCount(2);
      } else {
        setResponsiveAllProductCount(10);
        setResponsiveFavoriteProductCount(4);
      }
    }

    window.addEventListener('resize', handleResize);
    setTotalPage(Math.ceil(totalCount / responsiveAllProductCount));

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [totalCount, setResponsiveAllProductCount, setResponsiveFavoriteProductCount, setTotalPage, responsiveAllProductCount]);

  return (
    <div className={styles['container']}>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {
        favoriteData && isBestProduct &&
        <div className={styles['best-product-list']}>
          {
            favoriteData.slice(0, responsiveFavoriteProductCount).map((product) => (
              <div key={product.id} className={styles['best-product']}>
                <Link
                  to={`/items/${product.id}`}
                  state={{ product }}
                >
                  <img className={styles['best-product-img']} src={product.images} alt="제품 이미지" />
                </Link>
                <div className={styles['best-product-info']}>
                  <Link
                    to={`/items/${product.id}`}
                    state={{ product }}
                  >
                    <p className={styles['product-title']}>{product.name}</p>
                  </Link>
                  <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                  <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={() => { setIsEmptyHeart(!isEmptyHeart) }}>{isEmptyHeart ? <EmptyHeart /> : <FillHeart />}</span>{product.favoriteCount}</p>
                </div>
              </div>
            ))
          }
        </div>
      }
      {
        latestData && !isBestProduct &&
        <div className={styles['all-product-list']}>
          {
            sortProduct === "최신순" &&
            latestData.slice((pageNumber - 1) * responsiveAllProductCount, pageNumber * responsiveAllProductCount).map((product) => (
              <div key={product.id} className={styles['all-product']}>
                <Link
                  to={`/items/${product.id}`}
                  state={{ product }}
                >
                  <img className={styles['all-product-img']} src={product.images} alt="제품 이미지" />
                </Link>
                <div className={styles['all-product-info']}>
                  <Link
                    to={`/items/${product.id}`}
                    state={{ product }}
                  >
                    <p className={styles['product-title']}>{product.name}</p>
                  </Link>
                  <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                  <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={() => { setIsEmptyHeart(!isEmptyHeart) }}>{isEmptyHeart ? <EmptyHeart /> : <FillHeart />}</span>{product.favoriteCount}</p>
                </div>
              </div>
            ))
          }
          {
            sortProduct === "좋아요순" &&
            favoriteData.slice((pageNumber - 1) * responsiveAllProductCount, pageNumber * responsiveAllProductCount).map((product) => (
              <div key={product.id} className={styles['all-product']}>
                <Link
                  to={`/items/${product.id}`}
                  state={{ product }}
                >
                  <img className={styles['all-product-img']} src={product.images} alt="제품 이미지" />
                </Link>
                <div className={styles['all-product-info']}>
                  <Link
                    to={`/items/${product.id}`}
                    state={{ product }}
                  >
                    <p className={styles['product-title']}>{product.name}</p>
                  </Link>
                  <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                  <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={() => { setIsEmptyHeart(!isEmptyHeart) }}>{isEmptyHeart ? <EmptyHeart /> : <FillHeart />}</span>{product.favoriteCount}</p>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
};
export default ProductCard;