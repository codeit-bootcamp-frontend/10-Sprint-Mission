import { MouseEvent, ReactNode, useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  className: string;
  options: Record<string, string>;
  onSelect: (value: string) => void;
  children: ReactNode;
}

const Dropdown = ({
  className,
  options,
  onSelect,
  children,
}: DropdownProps) => {
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
          {Object.entries(options).map(([key, label]) => {
            return (
              <li key={key}>
                <button type="button" value={key} onClick={handleSelect}>
                  {label}
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
