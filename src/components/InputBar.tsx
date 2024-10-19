import './InputBar.css';
import { v4 as uuidv4 } from 'uuid';

interface InputBarProps {
  type: string;
  label?: string;
  inputId?: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function InputBar({
  type = 'text',
  label,
  inputId,
  name,
  value,
  placeholder,
  disabled = false,
  onChange,
  onKeyDown,
}: InputBarProps) {
  const eventProps = {
    ...(onKeyDown && { onKeyDown }),
    ...(onChange && { onChange }),
  };

  const id = uuidv4();

  return (
    <section className="InputBar">
      {label && (
        <label htmlFor={inputId || id} className="InputBar-label">
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
