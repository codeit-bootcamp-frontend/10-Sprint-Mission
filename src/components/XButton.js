import styles from "./XButton.module.css";
import { ReactComponent as XIcon } from "assets/images/ic_x.svg";

const XButton = ({ onClick, className }) => {
  return (
    <button aria-label="닫기 아이콘" onClick={onClick}>
      <XIcon className={`${styles.icon} ${className}`} />
    </button>
  );
};

export default XButton;
