import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import pandaTypoImg from "@/public/panda_typo.svg";
import profileImg from "@/public/ic_profile.svg";
import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <Image
              src={pandaTypoImg}
              className={styles.logo}
              alt="판다마켓 로고"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/boards"
            className={router.pathname === "/boards" ? styles.active : ""}
          >
            자유게시판
          </Link>
        </li>
        <li>
          <Link
            href="/items"
            className={
              router.pathname === "/items" || router.pathname === "/additem"
                ? styles.active
                : ""
            }
          >
            중고마켓
          </Link>
        </li>
      </ul>
      <Link href="/login">
        <Image src={profileImg} className={styles.profile} alt="프로필" />
      </Link>
    </header>
  );
};

export default Header;
