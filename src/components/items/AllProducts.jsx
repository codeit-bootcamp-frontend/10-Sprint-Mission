import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { fetchData } from "api/fetchData";
import { useEffect, useState } from "react";
import styles from './AllProducts.module.css';
import { ReactComponent as DropdownArrowDown } from 'assets/imgs/ic_arrow_down.svg';
import { ReactComponent as PageArrowLeft } from 'assets/imgs/arrow_left.svg';
import { ReactComponent as PageArrowRight } from 'assets/imgs/arrow_right.svg';
import { ReactComponent as EmptyHeart } from 'assets/imgs/empty_heart.svg';
import { ReactComponent as FillHeart } from 'assets/imgs/fill_heart.svg';
import { ReactComponent as SearchIcon } from 'assets/imgs/ic_search.svg';

const AllProducts = () => {
  const [latestData, setLatestData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortProduct, setSortProduct] = useState('최신순');
  const [isDropdown, setIsDropdown] = useState(false);
  const [isEmptyHeart, setIsEmptyHeart] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [maxVisiblePage, setMaxVisiblePage] = useState(5);

  useEffect(() => {
    const asyncFetch = async () => {
      const response1 = await fetchData(API_USEDS_GOODS_PRODUCTS);
      let totalCount = response1.data.totalCount;
      const response2 = await fetchData(API_USEDS_GOODS_PRODUCTS, { pageSize: totalCount });
      const responseFiltered = response2.data.list.filter((product) => {
        if (product.name !== '상품 이름' || !product.name) {
          return true;
        } else {
          totalCount -= 1;
          return false;
        }
      });
      setTotalPage(Math.ceil(totalCount / 10));
      setLatestData(responseFiltered);
      setFavoriteData([...responseFiltered].sort((a, b) => b.favoriteCount - a.favoriteCount));
      setLoading(response2.loading);
      setError(response2.error);
    }

    asyncFetch();
  }, []);

  const getVisiblePages = () => {
    const startPage = Math.max(1, pageNumber - Math.floor(maxVisiblePage / 2));
    const endPage = Math.min(totalPage, startPage + maxVisiblePage - 1);

    if (endPage - startPage < maxVisiblePage - 1) {
      return Array.from({ length: maxVisiblePage }, (_, i) => i + startPage).filter((page) => page <= totalPage);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <h4>전체 상품</h4>
        <div className={styles['search-container']}>
          <div className={styles['search-box']}>
            <SearchIcon className={styles['search-icon']} />
            <input className={styles['search-input']} type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <button className={styles['search-button']}>상품 등록하기</button>
          <div className={styles['search-dropdown']}>
            <span 
              className={styles['search-dropdown-selected']} 
              onClick={() => { setIsDropdown(!isDropdown) }}
            >
              {sortProduct}
              <DropdownArrowDown 
                width={'24px'} 
                height={'24px'}
                style={{ 
                  transition: 'transform 0.3s ease-out',
                  transform: isDropdown ? 'rotate(180deg)' : 'rotate(0deg)' 
                }}
              />
            </span>
            {
              isDropdown &&
              <ul className={styles['search-dropdown-list']}>
                <li onClick={() => { setSortProduct('최신순'); setIsDropdown(!isDropdown) }}>최신순</li>
                <li onClick={() => { setSortProduct('좋아요순'); setIsDropdown(!isDropdown) }}>좋아요순</li>
              </ul>
            }
          </div>
        </div>
      </div>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {
        latestData &&
        <div className={styles['all-product-list']}>
          {
            sortProduct === "최신순" &&
            latestData.slice((pageNumber - 1) * 10, pageNumber * 10).map((product) => (
              <div key={product.id} className={styles['all-product']}>
                <img className={styles['all-product-img']} src={product.images} alt="제품 이미지" />
                <div className={styles['all-product-info']}>
                  <p className={styles['product-title']}>{product.name}</p>
                  <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                  <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={() => { setIsEmptyHeart(!isEmptyHeart) }}>{isEmptyHeart ? <EmptyHeart /> : <FillHeart />}</span>{product.favoriteCount}</p>
                </div>
              </div>
            ))
          }
          {
            sortProduct === "좋아요순" &&
            favoriteData.slice((pageNumber - 1) * 10, pageNumber * 10).map((product) => (
              <div key={product.id} className={styles['all-product']}>
                <img className={styles['all-product-img']} src={product.images} alt="제품 이미지" />
                <div className={styles['all-product-info']}>
                  <p className={styles['product-title']}>{product.name}</p>
                  <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                  <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={() => { setIsEmptyHeart(!isEmptyHeart) }}>{isEmptyHeart ? <EmptyHeart /> : <FillHeart />}</span>{product.favoriteCount}</p>
                </div>
              </div>
            ))
          }
        </div>
      }

      <div className={styles['pagination']}>
        <span 
          onClick={() => setPageNumber(prev => Math.max(1, prev - 1))} 
          role="button"
          style={{ cursor: pageNumber === 1 ? 'not-allowed' : 'pointer' }}
        ><PageArrowLeft /></span>
        {
          getVisiblePages().map((page) => (
            <span 
              key={page} 
              onClick={() => { setPageNumber(page) }}
              onMouseEnter={(e) => e.target.style.backgroundColor = pageNumber !== page ? '#e5e7eb' : '#2f80ed'}
              onMouseLeave={(e) => e.target.style.backgroundColor = pageNumber !== page ? '#fff' : '#2f80ed'}
              style={{
                color: pageNumber === page ? '#f9fafb' : '#6b7280', 
                backgroundColor: pageNumber === page ? '#2f80ed' : '#fff', 
                border: pageNumber === page ? '' : ' 1px solid #e5e7eb;',
              }}
            >{page}</span>
          ))
        }
        <span 
          onClick={() => setPageNumber(prev => Math.min(totalPage, prev + 1))} 
          role="button" 
          style={{ 
            cursor: pageNumber === totalPage ? 'not-allowed' : 'pointer' 
          }}
        ><PageArrowRight /></span>
      </div>
    </div>
  )
}

export default AllProducts