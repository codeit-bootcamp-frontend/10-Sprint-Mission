import { useState } from "react";
import styles from "./Dropdown.module.css";

const DropDown = ({
  className = "",
  options = {},
  onSelect = () => {},
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (event) => {
    onSelect(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <div className={styles.dropdownButton} onClick={toggleDropdown}>
        {children}
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

export default DropDown;
