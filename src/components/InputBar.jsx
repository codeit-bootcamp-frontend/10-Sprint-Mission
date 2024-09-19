import './InputBar.css';

function InputBar({
  type = 'text',
  label,
  inputId = 'input',
  name,
  value,
  placeholder,
  disabled = false,
  onChange,
  onKeyDown,
}) {
  const eventProps = {
    ...(onKeyDown && { onKeyDown }),
    ...(onChange && { onChange }),
  };

  return (
    <section className="InputBar">
      {label && (
        <label htmlFor={inputId} className="InputBar-label">
          {label}
        </label>
      )}
      <input
        className="InputBar-input"
        type={type}
        id={inputId}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        {...eventProps}
      />
    </section>
  );
}

export default InputBar;
