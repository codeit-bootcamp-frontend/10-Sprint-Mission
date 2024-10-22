import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './ProductDetail.module.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { getProductDetail } from '../../api/itemApi';
import Comment from './components/Comment/Comment';
import backicon from '../../assets/images/backicon.png';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  ownerNickname: string;
  favoriteCount: number;
  createdAt: string;
}

function ProductDetail() {
  const { productId } = useParams<{ productId :string}>();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProductData = useCallback(async () => {
    try {
      setLoading(true);
      const product = await getProductDetail(Number(productId)); 
      setItem(product);
      console.log(product);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  console.log(item);

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (
    <>
      <Header />
      <div className={styles.product}>
        <div className={styles.contentContainer}>
          {item && <ProductInfo key={item.id} item={item} />}
          <hr />
          <Comment />
          <div className={styles.buttonContainer}>
            <button className={styles.back} onClick={() => navigate(-1)}>
              목록으로 돌아가기
              <img className={styles.backIcon} src={backicon} alt='목록으로 돌아가기' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;