import { useId } from 'react';
import './Textarea.css';

function Textarea({
  type = 'text',
  label,
  inputId,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  heightSize = '',
}) {
  const id = useId();

  return (
    <div className="Textarea">
      {label && (
        <label htmlFor={inputId || id} className="Textarea-label">
          {label}
        </label>
      )}
      <textarea
        type={type}
        id={inputId || id}
        name={name}
        value={value}
        className={`Textarea-input ${heightSize}`}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default Textarea;
