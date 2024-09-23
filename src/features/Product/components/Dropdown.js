import { useState } from "react";
import styles from "./Dropdown.module.css";
import kebabIcon from "assets/images/ic_kebab.svg";

const Dropdown = ({ className = "", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = {
    edit: "수정하기",
    remove: "삭제하기",
  };

  const handleSelect = (event) => {
    onSelect(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdownContainer} ${className}`}>
      <img
        src={kebabIcon}
        alt="수정/삭제 드롭다운 보이기"
        className={styles.kebab}
        onClick={toggleDropdown}
        role="button"
      />
      {isOpen && (
        <ul className={styles.dropdown}>
          {Object.keys(options).map((option) => (
            <li key={option}>
              <button type="button" value={option} onClick={handleSelect}>
                {options[option]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
