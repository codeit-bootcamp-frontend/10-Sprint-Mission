import React, { useEffect, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from'./ProductDetail.module.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { getProductDetail } from '../../api/itemApi';
import Comment from './components/Comment/Comment';

function ProductDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

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
        </div>
      </div>
    </>
    
  )
}

export default ProductDetail;