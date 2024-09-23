import './PaginationButton.css';

function PaginationButton({
  onClick,
  disabled,
  isActive,
  ariaCurrent,
  children,
}) {
  return (
    <button
      className={`PaginationButton ${isActive && 'active'}`}
      onClick={onClick}
      disabled={disabled}
      aria-current={ariaCurrent}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
