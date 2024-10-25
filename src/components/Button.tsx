import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button className={`${styles.primaryButton} ${className}`} {...props}>
      {children}
    </button>
  );
}
