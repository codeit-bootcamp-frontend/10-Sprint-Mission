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

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetchData(API_USEDS_GOODS_PRODUCTS, {});
      setLatestData(response.data.list);
      setFavoriteData([...response.data.list].sort((a, b) => b.favoriteCount - a.favoriteCount));
      setLoading(response.loading);
      setError(response.error);
    }

    asyncFetch();
  }, []);


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
            <span className={styles['search-dropdown-selected']} onClick={() => { setIsDropdown(!isDropdown) }}>{sortProduct}<DropdownArrowDown width={'24px'} height={'24px'} /></span>
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
            latestData.map((product) => (
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
            favoriteData.map((product) => (
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
        <span><PageArrowLeft /></span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span><PageArrowRight /></span>
      </div>
    </div>
  )
}

export default AllProducts