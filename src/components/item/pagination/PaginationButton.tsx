import './PaginationButton.css';

interface PaginationButtonProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  isActive?: boolean;
  ariaCurrent?: 'page' | 'step' | undefined;
  children: React.ReactNode;
}
function PaginationButton({
  onClick,
  disabled,
  isActive,
  ariaCurrent,
  children,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      className={`PaginationButton ${isActive ? 'active' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-current={ariaCurrent}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
