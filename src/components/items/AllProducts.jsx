import { API_USEDS_GOODS_PRODUCTS } from "config/api";
import { fetchData } from "hooks/fetchData";
import { useEffect, useState } from "react";
import styles from "./BestProducts.module.css";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetchData(API_USEDS_GOODS_PRODUCTS,);
      setData(response.data.list);
      setLoading(response.loading);
      setError(response.error);
    }

    asyncFetch();
  }, []);


  return (
    <div>
      <h3>베스트 상품</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러 발생</p>}
      {data && 
        <div className={styles['best-product-list']}>
          {data.map((product) => (
            <div key={product.id} className={styles['best-product']}>
              <img className={styles['best-product-img']} src={product.images} alt="제품 이미지" />
              <div className={styles['best-product-info']}>
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