import { useState } from 'react';
import './DropdownMenu.css';
import SortIcon from '../../assets/images/icons/ic_sort.svg?react';

function DropdownMenu({
  onSortSelection,
}: {
  onSortSelection: (sortOption: string) => void;
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='sortButtonWrapper'>
      <button className='sortDropdownTriggerButton' onClick={toggleDropdown}>
        <SortIcon />
      </button>

      {isDropdownVisible && (
        <div className='dropdownMenu'>
          <div
            className='dropdownItem'
            onClick={() => {
              onSortSelection('recent');
              setIsDropdownVisible(false);
            }}
          >
            최신순
          </div>
          <div
            className='dropdownItem'
            onClick={() => {
              onSortSelection('favorite');
              setIsDropdownVisible(false);
            }}
          >
            인기순
          </div>
        </div>
      )}
    </div>
  );
}
export default DropdownMenu;
