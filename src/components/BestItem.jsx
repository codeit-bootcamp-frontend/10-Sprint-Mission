import { useEffect, useState } from 'react';
import Card from './Card';
import { getBestProductList } from '../api';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

function BestItem({ css }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const list = await getBestProductList();

        setItems(list);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);
  return (
    <div css={[css, layout]}>
      <h2 css={h2}>베스트 상품</h2>
      <div css={container}>
        {items.map((product) => (
          <Link to={`/items/${product.id}`} key={product.id}>
            <Card
              key={product.id}
              title={product.name}
              image={product.images}
              price={product.price}
              like={product.favoriteCount}
            ></Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

const layout = css`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2.4rem;
`;

const container = css`
  display: flex;
  gap: 2.4rem;
  margin-top: 1.6rem;
`;

const h2 = css`
  font-weight: 700;
  font-size: 2rem;
`;

export default BestItem;
