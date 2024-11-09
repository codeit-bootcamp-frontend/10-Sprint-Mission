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
  ...textareaProps
}: Props) => {
  return (
    <Container className={`${styles.container}  ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        {...textareaProps}
      ></textarea>
    </Container>
  );
};

export default Textarea;
