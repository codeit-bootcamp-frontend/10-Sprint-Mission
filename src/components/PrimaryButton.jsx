import './PrimaryButton.css';

function PrimaryButton({ children, handleOnClick, disable = false }) {
  return (
    <button
      className="PrimaryButton"
      onClick={handleOnClick}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
