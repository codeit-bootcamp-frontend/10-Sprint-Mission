import styles from "./Button.module.css";

const Button = ({ type, className = "", disabled, children }) => {
  const handleClick = (event) => {
    if (type === "submit") {
      event.preventDefault();
    }
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
