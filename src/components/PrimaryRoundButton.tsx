import './PrimaryRoundButton.css';

interface PrimaryRoundButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?(event?: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
}

function PrimaryRoundButton({
  children,
  type = 'button',
  onClick,
  disabled = false,
}: PrimaryRoundButtonProps) {
  return (
    <button
      type={type}
      className="PrimaryRoundButton"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default PrimaryRoundButton;
