import styles from "./Textarea.module.css";

const Textarea = ({ name, label, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
