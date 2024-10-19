import { MouseEvent } from "react";
import styles from "./XButton.module.css";
import { ReactComponent as XIcon } from "assets/images/ic_x.svg";

interface Props {
  className: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const XButton = ({ className = "", onClick = () => {} }: Props) => {
  return (
    <button type="button" aria-label="닫기 버튼" onClick={onClick}>
      <XIcon className={`${styles.icon} ${className}`} />
    </button>
  );
};

export default XButton;
