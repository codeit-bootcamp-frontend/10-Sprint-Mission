import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@/store/UserContext";
import defaultImage from "#/images/profile_image_w40x3.png";
import styles from "./Header.module.css";

export default function Header() {
  const { pathname, reload, push } = useRouter();
  const { isLoading, user, setUser } = useUser();

  const handleButtonClick = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    if (setUser) setUser(undefined);

    if (pathname === "/") reload();
    else push("/");
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="판다마켓 로고"></Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              className={
                pathname === "/boards" ? styles.navItem_active : undefined
              }
              href="/boards"
            >
              자유게시판
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/items" ? styles.navItem_active : undefined
              }
              href="/items"
            >
              중고마켓
            </Link>
          </li>
        </ul>
      </nav>
      {isLoading ? undefined : user ? (
        <>
          <Image
            className={styles.profile}
            src={user.image ? user.image : defaultImage}
            alt="프로필 사진"
          />
          <button
            className={styles.logInButton}
            type="button"
            onClick={handleButtonClick}
          >
            로그아웃
          </button>
        </>
      ) : (
        <Link className={styles.logInButton} href="/login">
          로그인
        </Link>
      )}
    </header>
  );
}
