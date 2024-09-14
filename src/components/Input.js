import styles from "./Input.module.css";

const Input = ({ name, label, onChange }) => {
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
        placeholder={`${label}를 입력해주세요`}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
