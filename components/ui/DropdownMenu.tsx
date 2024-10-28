import { useState } from "react";
import SortIcon from "@/public/images/icons/ic_sort.svg";
import {
  SortButtonWrapper,
  SortDropdownTriggerButton,
  DropdownMenuContainer,
  DropdownItem,
} from "./DropdownMenu.styles"

type DropdownMenuProps = {
  onSortSelection: (sortOption: any) => void;
  sortOptions: { key: string; label: string }[];
}

const DropdownMenu = ({ onSortSelection, sortOptions }: DropdownMenuProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <SortButtonWrapper>
      <SortDropdownTriggerButton onClick={toggleDropdown}>
        <SortIcon alt="정렬" />
      </SortDropdownTriggerButton>

      {isDropdownVisible && (
        <DropdownMenuContainer>
          {sortOptions.map((option) => (
            <DropdownItem
              key={option.key}
              onClick={() => {
                onSortSelection(option.key);
                setIsDropdownVisible(false);
              }}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenuContainer>
      )}
    </SortButtonWrapper>
  );
};

export default DropdownMenu;
