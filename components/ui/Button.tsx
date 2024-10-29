import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  children,
  onClick = () => {},
}: PropsWithChildren<ButtonProps>) => {
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
