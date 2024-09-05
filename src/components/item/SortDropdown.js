import './SortDropdown.css';
import arrowIcon from '../../assets/ic_arrow_down.svg';
import { useState } from 'react';

function SortDropdown({ handleSortClick }) {
  const handleRecentClick = () => {
    handleSortClick('recent');
  };

  const handleFavoriteClick = () => {
    handleSortClick('favorite');
  };

  return (
    <div className="SortDropdown">
      <div className="SortDropdown-selected">
        <span>최신순</span>
        <img src={arrowIcon} alt="아래방향 화살표" />
      </div>
      <div className="SortDropdown-options-container hide">
        <ul className="SortDropdown-options">
          <li onClick={handleRecentClick}>최신순</li>
          <li onClick={handleFavoriteClick}>좋아요순</li>
        </ul>
      </div>
    </div>
  );
}

export default SortDropdown;
