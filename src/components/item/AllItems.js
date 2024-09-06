import './AllItems.css';
import Item from './Item';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import PrimaryButton from '../PrimaryButton';
import Pagination from './pagination/Pagination';
import { getItems } from '../../services/api';
import { getAllItemsPageSize } from '../../utils/paging';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllItems() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getAllItemsPageSize());
  const [orderBy, setOrderBy] = useState('recent');

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/addItem');
  };

  const handleSortClick = (orderBy) => {
    setOrderBy(orderBy);
  };

  useEffect(() => {
    const handleResize = () => setPageSize(getAllItemsPageSize());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const { list, totalCount } = await getItems({
        page: page,
        pageSize,
        orderBy,
      });
      setItems(list);
      setTotalCount(totalCount);
    };

    fetchItems();
  }, [page, pageSize, orderBy]);

  return (
    <section className="AllItems">
      <div className="AllItems-header">
        <div className="AllItems-control-panel">
          <h3 className="AllItems-title">전체상품</h3>
          <SearchBar />
          <PrimaryButton
            value="상품등록하기"
            handleOnClick={handleButtonClick}
          />
          <SortDropdown handleSortClick={handleSortClick} />
        </div>
      </div>
      <div className="AllItems-list">
        {items.map((item) => (
          <Item key={item.id} {...item} imgSize="small" />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination total={totalCount} page={page} setPage={setPage} />
      </div>
    </section>
  );
}

export default AllItems;
