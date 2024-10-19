import { useId } from 'react';
import './Textarea.css';

interface TextareaProps {
  label?: string;
  inputId?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
  heightSize: string;
}

function Textarea({
  label,
  inputId,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  heightSize = '',
}: TextareaProps) {
  const id = useId();

  return (
    <div className="Textarea">
      {label && (
        <label htmlFor={inputId || id} className="Textarea-label">
          {label}
        </label>
      )}
      <textarea
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
