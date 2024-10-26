import { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  page?: boolean;
}

export default function Container({
  className = "",
  page,
  children,
  ...props
}: PropsWithChildren<ContainerProps>) {
  const classNames = `${styles.container} ${
    page ? styles.page : ""
  } ${className}`;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
