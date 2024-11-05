import { ChangeEvent, KeyboardEvent, ReactNode } from "react";
import styles from "./Input.module.css";
import Label from "./Label";
import Container from "../layout/Container";

interface InputProps {
  type: string;
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const Input = ({
  type = "text",
  name = "",
  className = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  onKeyUp = () => {},
  children,
}: InputProps) => {
  return (
    <Container className={`${styles.container} ${className}`}>
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
    </Container>
  );
};

export default Input;
