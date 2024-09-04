import './SortDropdown.css';
import arrowIcon from '../../assets/ic_arrow_down.svg';

function SortDropdown() {
  return (
    <div className="SortDropdown">
      <div className="SortDropdown-selected">
        <span>최신순</span>
        <img src={arrowIcon} alt="아래방향 화살표" />
      </div>
      <div className="SortDropdown-options-container">
        <ul className="SortDropdown-options">
          <li>최신순</li>
          <li>좋아요순</li>
        </ul>
      </div>
    </div>
  );
}

export default SortDropdown;
