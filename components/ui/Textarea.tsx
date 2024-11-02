import { ChangeEvent } from "react";
import Label from "./Label";
import styles from "./Textarea.module.css";
import Container from "../layout/Container";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
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
    <Container className={`${styles.container}  ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </Container>
  );
};

export default Textarea;
