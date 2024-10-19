import styles from "./Input.module.css";
import Label from "./Label";

interface Props {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  onChange: () => void;
  onKeyUp: () => void;
}

const Input = ({
  type = "text",
  name = "",
  label = "",
  placeholder = "",
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
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Input;
