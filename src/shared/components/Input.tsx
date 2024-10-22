import { ChangeEvent, KeyboardEvent, ReactNode } from "react";
import styles from "./Input.module.css";
import Label from "./Label";

interface Props {
  className?: string;
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const Input = ({
  className = "",
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  onKeyUp = () => {},
  children,
}: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Label className={styles.label} htmlFor={name}>
        {label}
      </Label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
