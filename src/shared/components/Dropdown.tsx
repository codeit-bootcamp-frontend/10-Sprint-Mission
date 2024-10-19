import { MouseEvent, ReactNode, useState } from "react";
import { Options } from "shared/types/components";
import styles from "./Dropdown.module.css";

interface Props {
  className: string;
  options: Options;
  onSelect: (value: string) => void;
  children: ReactNode;
}

const Dropdown = ({
  className = "",
  options = {},
  onSelect = () => {},
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (event: MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
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

export default Dropdown;
