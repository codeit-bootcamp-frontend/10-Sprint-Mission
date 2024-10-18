import { useState, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ onSelect, children }) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(children[0].props.value);

  const handleSelectClick = () => {
    setIsActive((prev) => !prev);
  };
  const handleSelectBlur = (e) => {
    if (e.relatedTarget?.className === "dropdown__option") return;
    setIsActive(false);
  };
  const handleOptionClick = (e) => {
    setValue(e.target.value);
    setIsActive(false);
  };

  useEffect(() => {
    onSelect(value);
  }, [onSelect, value]);

  return (
    <div className="dropdown">
      <button
        className="dropdown__select"
        type="button"
        onClick={handleSelectClick}
        onBlur={handleSelectBlur}
      >
        {children.find((child) => value === child.props.value).props.children}
      </button>
      {isActive && (
        <ul className="dropdown__optionList">
          {children.map((child) => (
            <li key={child.props.value} className="dropdown__optionListItem">
              <button
                className="dropdown__option"
                type="button"
                onClick={handleOptionClick}
                value={child.props.value}
              >
                {child.props.children}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
