import React, { useEffect, useState, useRef } from "react";

const options = [
  { value: "latest", label: "최신순" },
  { value: "most_liked", label: "like가 높은 순" },
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
    <div ref={inputRef} className="dropdown-container">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {selected ? selected.label : "Select an option"}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="dropdown-option"
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
