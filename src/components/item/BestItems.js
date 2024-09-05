import './BestItems.css';
import Item from './Item';
import { getItems } from '../../services/api';
import { useEffect, useState } from 'react';

function BestItems() {
  const [items, setItems] = useState([]);

  const handleLoad = async (queryParam) => {
    const { list } = await getItems(queryParam);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ page: 1, pageSize: 4, orderBy: 'favorite' });
  }, []);

  return (
    <section className="BestItems">
      <h3 className="BestItems-title">베스트 상품</h3>
      <div className="BestItems-list">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default BestItems;
