import Logo from "../../public/images/logo/logo.svg";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const getLinkStyle = (isActive: boolean) => ({
    color: isActive ? "var(--blue)" : undefined,
  });

  return (
    <header className={styles.globalHeader}>
      <div className={styles.headerLeft}>
        <Link href="/" passHref>
          <div>
            <Image width={153} height={51} src={Logo} alt="판다마켓 로고" />
          </div>
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/community" passHref>
                <span style={getLinkStyle(pathname === "/community")}>
                  자유게시판
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/items" passHref>
                <span
                  style={getLinkStyle(
                    pathname === "/items" || pathname === "/additem"
                  )}
                >
                  중고마켓
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link href="/login" passHref>
        <span className={styles.loginLink}>로그인</span>
      </Link>
    </header>
  );
};

export default Header;
