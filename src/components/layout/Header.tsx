import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import profileImage from "#/images/profile_image_w40x3.png";
import styles from "./Header.module.css";

export default function Header() {
  const path = useRouter().pathname;
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(window.localStorage.getItem("accessToken"));
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="판다마켓 로고"></Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              className={path === "/boards" ? styles.navItem_active : undefined}
              href="/boards"
            >
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              className={path === "/items" ? styles.navItem_active : undefined}
              href="/items"
            >
              중고마켓
            </Link>
          </li>
        </ul>
      </nav>
      {token ? (
        <Image
          className={styles.profile}
          src={profileImage}
          alt="프로필 사진"
        />
      ) : (
        <Link className={styles.logInButton} href="/login">
          로그인
        </Link>
      )}
    </header>
  );
}
