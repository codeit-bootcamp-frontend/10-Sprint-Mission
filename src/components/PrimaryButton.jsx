import './PrimaryButton.css';

function PrimaryButton({ text, type = 'text', onClick, disabled = false }) {
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
