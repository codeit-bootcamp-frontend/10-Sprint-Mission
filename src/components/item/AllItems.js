import './AllItems.css';
import Item from './Item';
import SearchInput from './SearchBar';
import SortDropdown from './SortDropdown';
import PrimaryButton from '../PrimaryButton';
import { getItems } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllItems() {
  const [items, setItems] = useState([]);

  const handleLoad = async (queryParam) => {
    const { list } = await getItems(queryParam);
    setItems(list);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/addItem');
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
          <PrimaryButton
            value="상품등록하기"
            handleOnClick={handleButtonClick}
          />
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
