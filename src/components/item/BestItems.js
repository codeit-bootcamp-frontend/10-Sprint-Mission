import './BestItems.css';
import Item from './Item';
import { getItems } from '../../services/api';
import { getPageSize } from '../../utils/paging';
import { useEffect, useState } from 'react';

function BestItems() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

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

  useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
