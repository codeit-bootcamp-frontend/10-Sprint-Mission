import styles from "./Button.module.css";

const Button = ({ type, className, isDisabled, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
