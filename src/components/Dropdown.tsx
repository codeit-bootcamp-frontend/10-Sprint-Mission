import {
  useState,
  useEffect,
  ReactElement,
  FocusEvent,
  MouseEvent,
} from "react";
import "./Dropdown.css";

interface Props {
  onSelect: (value: string) => void;
  children: ReactElement[];
}

export default function Dropdown({ onSelect, children }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>(children[0].props.value);

  const handleSelectClick = () => {
    setIsActive((prev) => !prev);
  };
  const handleSelectBlur = (e: FocusEvent<HTMLButtonElement>) => {
    if (e.relatedTarget?.className === "dropdown__option") return;
    setIsActive(false);
  };
  const handleOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.value);
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
        {children.find((child) => value === child.props.value)?.props.children}
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
