import { useState, useEffect } from "react";
import "./OrderSelect.css";

export default function OrderSelect({ setParamObj }) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("recent");

  const handleSelectClick = () => {
    setIsActive((prev) => !prev);
  };
  const handleSelectBlur = (e) => {
    if (e.relatedTarget?.className === "orderSelect__option") return;
    setIsActive(false);
  };
  const handleRecentClick = () => {
    setValue("recent");
    setIsActive(false);
  };
  const handleFavoriteClick = () => {
    setValue("favorite");
    setIsActive(false);
  };

  useEffect(() => {
    setParamObj((prevObj) => ({ ...prevObj, page: 1, orderBy: value }));
  }, [setParamObj, value]);

  return (
    <div className="orderSelect">
      <button
        className="orderSelect__select"
        onClick={handleSelectClick}
        onBlur={handleSelectBlur}
      >
        {value === "recent" ? "최신순" : "좋아요순"}
      </button>
      {isActive && (
        <ul className="orderSelect__optionList">
          <li className="orderSelect__optionListItem">
            <button className="orderSelect__option" onClick={handleRecentClick}>
              최신순
            </button>
          </li>
          <li className="orderSelect__optionListItem">
            <button
              className="orderSelect__option"
              onClick={handleFavoriteClick}
            >
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
