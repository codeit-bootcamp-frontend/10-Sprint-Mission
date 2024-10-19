import { ChangeEvent, KeyboardEvent } from "react";
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
}: Props) => {
  return (
    <div className={styles.container}>
      <Label className={styles.label} htmlFor={name}>
        {label}
      </Label>
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
    </div>
  );
};

export default Input;
