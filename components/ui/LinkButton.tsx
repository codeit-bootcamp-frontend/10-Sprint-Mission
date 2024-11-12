import Link from "next/link";
import styles from "./LinkButton.module.css";
import { PropsWithChildren } from "react";

interface LinkButtonProps {
  href: string;
  className?: string;
}

const LinkButton = ({
  href,
  className = "",
  children,
}: PropsWithChildren<LinkButtonProps>) => {
  return (
    <Link href={href} className={`${styles.button} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
