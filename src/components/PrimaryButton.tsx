import './PrimaryButton.css';

interface PrimaryButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

function PrimaryButton({
  text,
  type = 'button',
  onClick,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className="PrimaryButton"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
