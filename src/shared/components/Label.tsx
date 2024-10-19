import { ReactNode } from "react";
import styles from "./Label.module.css";

interface Props {
  className?: string;
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ className = "", htmlFor = "", children }: Props) => {
  return (
    <label className={`${styles.label} ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
