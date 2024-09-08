import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { fetchData } from "api/fetchData";
import { useEffect, useState } from "react";
import styles from './AllProducts.module.css';

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetchData(API_USEDS_GOODS_PRODUCTS, {});
      setData(response.data.list);
      setLoading(response.loading);
      setError(response.error);
    }

    asyncFetch();
  }, []);


  return (
    <div className={styles['container']}>
      <h3>전체 상품</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {data && 
        <div className={styles['all-product-list']}>
          {data.map((product) => (
            <div key={product.id} className={styles['all-product']}>
              <img className={styles['all-product-img']} src={product.images} alt="제품 이미지" />
              <div className={styles['all-product-info']}>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.favoriteCount}</p>
              </div>
            </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default AllProducts