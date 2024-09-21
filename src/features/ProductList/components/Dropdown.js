import { useState } from "react";
import styles from "./Dropdown.module.css";
import sortImg from "assets/images/ic_sort.svg";

const Dropdown = ({ order, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    recent: "최신순",
    favorite: "좋아요순",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (event) => {
    onChange(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={toggleDropdown}>
        <span>{options[order]}</span>
        <img src={sortImg} alt="드롭다운" />
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {Object.keys(options).map((option) => {
            return (
              <li key={option}>
                <button type="button" value={option} onClick={handleSelect}>
                  {options[option]}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
