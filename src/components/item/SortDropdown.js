import './SortDropdown.css';
import arrowIcon from '../../assets/ic_arrow_down.svg';
import { useState } from 'react';

function SortDropdown({ handleSortClick }) {
  const [selected, setSelected] = useState('최신순');
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => setIsActive((prev) => !prev);

  const handleOptionClick = (sortType, label) => {
    handleSortClick(sortType);
    setSelected(label);
    setIsActive(false);
  };

  return (
    <div className="SortDropdown">
      <div className="SortDropdown-selected" onClick={toggleDropdown}>
        <span className="SortDropdown-selected-value">{selected}</span>
        <div className="SortDropdown-arrow"></div>
      </div>
      {isActive && (
        <div className="SortDropdown-options-container">
          <ul className="SortDropdown-options">
            <li onClick={() => handleOptionClick('recent', '최신순')}>
              최신순
            </li>
            <li onClick={() => handleOptionClick('favorite', '좋아요순')}>
              좋아요순
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
