import React, { useEffect, useCallback, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from'./ProductDetail.module.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { getProductDetail } from '../../api/itemApi';
import Comment from './components/Comment/Comment';
import backicon from '../../assets/images/backicon.png';

function ProductDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const fetchProductData = useCallback(async () => {
    try {
      setLoading(true)
      const product = await getProductDetail(productId);
      setItem(product);
      console.log(product);
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProductData();
  },[fetchProductData]);
  console.log(item)

  if (loading) {
    return ;  
  }
  return (
    <>
      <Header />
      <div className={styles.product}>
        <div className={styles.contentContainer}>
          <ProductInfo key={item.id} item={item}/>
          <hr></hr>
          <Comment />
          <div className={styles.buttonContainer}>
            <button className={styles.back} onClick={() => navigate(-1)}>
              목록으로 돌아가기
              <img className={styles.backIcon} src={backicon} alt='목록으로 돌아가기'></img>
            </button>
          </div>
          
        </div>
      </div>
    </>
    
  )
}

export default ProductDetail;