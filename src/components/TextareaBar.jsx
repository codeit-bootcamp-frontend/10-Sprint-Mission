import './TextareaBar.css';

function TextareaBar({
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
    <div className="TextareaBar">
      {label && (
        <label htmlFor={inputId} className="TextareaBar-label">
          {label}
        </label>
      )}
      <textarea
        type={type}
        id={inputId}
        name={name}
        value={value}
        className="TextareaBar-input"
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default TextareaBar;
