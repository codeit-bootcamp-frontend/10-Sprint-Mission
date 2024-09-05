import './SortDropdown.css';
import arrowIcon from '../../assets/ic_arrow_down.svg';
import { useState } from 'react';

function SortDropdown({ handleSortClick }) {
  const [selected, setSelected] = useState('최신순');
  const [isActive, setIsActive] = useState(false);

  const handleSelectedClick = () => {
    setIsActive(!isActive);
  };

  const handleRecentClick = () => {
    handleSortClick('recent');
    setSelected('최신순');
    setIsActive(!isActive);
  };

  const handleFavoriteClick = () => {
    handleSortClick('favorite');
    setSelected('좋아요순');
    setIsActive(!isActive);
  };

  return (
    <div className="SortDropdown">
      <div className="SortDropdown-selected" onClick={handleSelectedClick}>
        <span>{selected}</span>
        <img src={arrowIcon} alt="아래방향 화살표" />
      </div>
      <div
        className={`SortDropdown-options-container ${
          isActive ? '' : 'inactive'
        }`}
      >
        <ul className="SortDropdown-options">
          <li onClick={handleRecentClick}>최신순</li>
          <li onClick={handleFavoriteClick}>좋아요순</li>
        </ul>
      </div>
    </div>
  );
}

export default SortDropdown;
