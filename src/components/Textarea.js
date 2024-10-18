import styles from "./Textarea.module.css";

const Textarea = ({
  name,
  label = "",
  className = "",
  placeholder = "",
  value = "",
  onChange,
}) => {
  return (
    <div className={`${styles.container}  ${className}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
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
