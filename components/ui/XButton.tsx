import { MouseEvent } from "react";
import styles from "./XButton.module.css";
import Image from "next/image";
import xIcon from "@/public/ic_x.svg";

interface Props {
  className: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const XButton = ({ className = "", onClick = () => {} }: Props) => {
  return (
    <button type="button" aria-label="닫기 버튼" onClick={onClick}>
      <Image
        src={xIcon}
        className={`${styles.icon} ${className}`}
        alt="제거 아이콘"
      />
    </button>
  );
};

export default XButton;
