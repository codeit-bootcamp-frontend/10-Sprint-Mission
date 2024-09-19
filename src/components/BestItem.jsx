/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Card from './Card';
import { getProductList } from '../api';
import styles from './BestItem.module.css';

function BestItem({className}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { list } = await getProductList();
        const sortedItems = list
          .sort((a, b) => b.favoriteCount - a.favoriteCount)
          .slice(0, 4);

        setItems(sortedItems);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);
  return (
    <div className={`${className} ${styles.layout}`}>
      <h2>베스트 상품</h2>
      <div className={styles.container}>
        {items.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            image={product.images}
            price={product.price}
            like={product.favoriteCount}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default BestItem;
