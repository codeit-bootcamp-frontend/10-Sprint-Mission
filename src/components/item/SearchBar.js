import './SearchBar.css';
import searchIcon from '../../assets/ic_search.svg';

function SearchBar() {
  return (
    <div className="SearchBar">
      <img
        className="SearchBar-search-icon"
        src={searchIcon}
        alt="검색 아이콘"
      />
      <input
        className="SearchBar-input"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}

export default SearchBar;
