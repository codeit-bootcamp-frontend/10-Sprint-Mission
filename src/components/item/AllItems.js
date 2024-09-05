import './AllItems.css';
import Item from './Item';
import SearchInput from './SearchBar';
import SortDropdown from './SortDropdown';
import PrimaryButton from '../PrimaryButton';
import { getItems } from '../../services/api';
import { useEffect, useState } from 'react';

function AllItems() {
  const [items, setItems] = useState([]);

  const handleLoad = async (queryParam) => {
    const { list } = await getItems(queryParam);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ page: 1, pageSize: 20, orderBy: 'recent' });
  }, []);

  return (
    <section className="AllItems">
      <div className="AllItems-header">
        <h3 className="AllItems-title">전체상품</h3>
        <div className="AllItems-control-panel">
          <SearchInput />
          <PrimaryButton />
          <SortDropdown />
        </div>
      </div>
      <div className="AllItems-list">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AllItems;
