import './PrimaryButton.css';

function PrimaryButton({ children, onClick, disable = false }) {
  return (
    <button className="PrimaryButton" onClick={onClick} disabled={disable}>
      {children}
    </button>
  );
}

export default PrimaryButton;
