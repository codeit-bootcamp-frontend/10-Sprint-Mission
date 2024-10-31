import DropIcon from '@/image/ic_arrow_down.svg';
import styles from '@/styles/DropDown.module.css';
import { useState } from 'react';

export default function Dropdown({ selectedOption, onChange }) {
  const sortOptions = [
    { value: 'liked', label: '좋아요순' },
    { value: 'new', label: '최신순' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropDownContainer}>
      <div
        className={styles.selectedOption}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {sortOptions.find((option) => option.value === selectedOption)?.label}
        <DropIcon className={styles.dropIcon} />
      </div>
      {isOpen && (
        <ul className={styles.optionList}>
          {sortOptions.map((option) => (
            <li
              className={styles.optionValue}
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
