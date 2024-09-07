import { useState } from "react";
import styles from "./Dropdown.module.css";
import sortImg from "../assets/ic_sort.svg";

const Dropdown = ({ order, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    recent: "최신순",
    favorite: "좋아요순",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onChange(option);
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
              <li key={option} onClick={() => handleSelect(option)}>
                {options[option]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
