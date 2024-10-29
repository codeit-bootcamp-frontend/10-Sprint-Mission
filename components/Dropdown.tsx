import React, { useEffect, useState, useRef } from "react";
import styles from "./Dropdown.module.css";
import { SortOption } from "../pages/boards/index";

const options = [
  { value: "latest", label: "최신순" },
  { value: "most_liked", label: "좋아요순" },
];

interface DropdownProps {
  value?: { value: string; label: string };
  onChange?: (option: { value: string; label: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || options[0]);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (e: MouseEvent) => {
      if (inputRef.current && inputRef.current.contains(e.target as Node)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const handleOptionClick = (option: { value: string; label: string }) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div ref={inputRef} className={styles.dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownButton}
      >
        {selected ? selected.label : "Select an option"} ▼
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={styles.dropdownItem}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
