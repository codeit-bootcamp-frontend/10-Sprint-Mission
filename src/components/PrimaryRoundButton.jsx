import './PrimaryRoundButton.css';

export default function PrimaryRoundButton({
  children,
  type = 'text',
  onClick,
  disabled = false,
}) {
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
