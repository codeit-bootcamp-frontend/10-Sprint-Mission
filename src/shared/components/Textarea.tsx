import { ChangeEvent } from "react";
import Label from "./Label";
import styles from "./Textarea.module.css";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  className = "",
  name = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
}: Props) => {
  return (
    <div className={`${styles.container}  ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      ></textarea>
    </div>
  );
};

export default Textarea;
