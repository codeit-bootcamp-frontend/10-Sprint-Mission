import './SortDropdown.css';
import { useState } from 'react';

interface SortDropdownProps {
  handleSortClick: (sortType: string) => void;
}

function SortDropdown({ handleSortClick }: SortDropdownProps) {
  const [selected, setSelected] = useState<string>('최신순');
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleDropdown = () => setIsActive((prev) => !prev);

  const handleOptionClick = (sortType: string, label: string) => {
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
