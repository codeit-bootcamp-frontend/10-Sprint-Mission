import './AllItems.css';
import Item from './Item';
import SearchInput from './SearchBar';
import SortDropdown from './SortDropdown';
import PrimaryButton from '../PrimaryButton';

function AllItems() {
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default AllItems;
