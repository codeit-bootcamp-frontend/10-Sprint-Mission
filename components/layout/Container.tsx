import { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
  isPage?: boolean;
}

export default function Container({
  className = "",
  isPage,
  children,
  ...props
}: PropsWithChildren<ContainerProps>) {
  const classNames = `${styles.container} ${
    isPage ? styles.page : ""
  } ${className}`;

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
