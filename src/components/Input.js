import styles from "./Input.module.css";

const Input = ({ name, label, placeholder, onChange, onKeyDown }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Input;
