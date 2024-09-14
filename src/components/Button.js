import styles from "./Button.module.css";

const Button = ({ className, isDisabled, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <button
      type="submit"
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
