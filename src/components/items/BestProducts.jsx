import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { fetchData } from "api/fetchData";
import { useEffect, useState } from "react";
import styles from "./BestProducts.module.css";
import {ReactComponent as EmptyHeart} from 'assets/imgs/empty_heart.svg';
import {ReactComponent as FillHeart} from 'assets/imgs/fill_heart.svg';

const BestProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEmptyHeart, setIsEmptyHeart] = useState(true);

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetchData(API_USEDS_GOODS_PRODUCTS, {pageSize: 4, orderBy: 'favorite'});
      setData(response.data.list);
      setLoading(response.loading);
      setError(response.error);
    }

    asyncFetch();
  }, []);


  return (
    <div className={styles['container']}>
      <h4 className={styles['title']}>베스트 상품</h4>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {data && 
        <div className={styles['best-product-list']}>
          {data.map((product) => (
            <div key={product.id} className={styles['best-product']}>
              <img className={styles['best-product-img']} src={product.images} alt="제품 이미지" />
              <div className={styles['best-product-info']}>
                <p className={styles['product-title']}>{product.name}</p>
                <p className={styles['product-price']}>{Number(product.price)?.toLocaleString()}</p>
                <p className={styles['product-favorite-count']}><span className={styles['product-heart-img']} onClick={()=> {setIsEmptyHeart(!isEmptyHeart)}}>{isEmptyHeart ? <EmptyHeart/> : <FillHeart/>}</span>{product.favoriteCount}</p>
              </div>
            </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default BestProducts