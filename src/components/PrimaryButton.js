import './PrimaryButton.css';

function PrimaryButton({ value, handleOnClick }) {
  return (
    <button className="PrimaryButton" onClick={handleOnClick}>
      {value}
    </button>
  );
}

export default PrimaryButton;
