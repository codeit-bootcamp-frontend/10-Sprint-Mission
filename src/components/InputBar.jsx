import './InputBar.css';

function InputBar({
  type = 'text',
  label,
  inputId = 'input',
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
}) {
  return (
    <div className="InputBar">
      {label && (
        <label htmlFor={inputId} className="InputBar-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        className="InputBar-input"
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default InputBar;
