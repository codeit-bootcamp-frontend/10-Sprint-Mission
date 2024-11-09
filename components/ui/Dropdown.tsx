import { ReactNode, useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event.currentTarget.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      <div
        tabIndex={0}
        role="button"
        className={styles.dropdownButton}
        onClick={toggleDropdown}
      >
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
