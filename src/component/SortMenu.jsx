// SortMenu.js
import polygon from '../assets/Polygon.png';

const SortMenu = ({ sortbtntext, DropDown, isOpen, handleSortClick }) => {
  return (
    <button className="Recently_favorite_sortmenu" onClick={DropDown}>
      {sortbtntext}
      <img src={polygon} alt="Sort" />
      {isOpen && (
        <div className="dropdown_menu">
          <button className="Recently_btn" onClick={() => handleSortClick('recent')}>최신순</button>
          <button className="favorite_btn" onClick={() => handleSortClick('favorite')}>좋아요순</button>
        </div>
      )}
    </button>
  );
};

export default SortMenu;
