import './BestItems.css';
import Item from './Item';
import { getItems } from '../../services/api';
import { getBestItemsPageSize } from '../../utils/paging';
import { useEffect, useState } from 'react';

function BestItems() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getBestItemsPageSize());

  useEffect(() => {
    const handleResize = () => setPageSize(getBestItemsPageSize());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const { list } = await getItems({
        page: 1,
        pageSize,
        orderBy: 'favorite',
      });
      setItems(list);
    };

    fetchItems();
  }, [pageSize]);

  return (
    <section className="BestItems">
      <h3 className="BestItems-title">베스트 상품</h3>
      <div className="BestItems-list">
        {items.map((item) => (
          <Item key={item.id} {...item} imgSize="large" />
        ))}
      </div>
    </section>
  );
}

export default BestItems;
