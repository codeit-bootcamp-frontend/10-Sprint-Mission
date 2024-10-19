import { MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  children,
  onClick = () => {},
}: Props) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
