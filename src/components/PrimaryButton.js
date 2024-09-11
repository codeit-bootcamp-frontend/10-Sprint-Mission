import './PrimaryButton.css';

function PrimaryButton({ children, handleOnClick }) {
  return (
    <button className="PrimaryButton" onClick={handleOnClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
