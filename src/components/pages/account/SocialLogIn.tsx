import Image from "next/image";
import Link from "next/link";
import googleLogo from "#/icons/google.svg";
import kakaoLogo from "#/icons/kakaotalk.svg";
import styles from "./SocialLogIn.module.css";

export default function SocialLogIn() {
  return (
    <div className={styles.container}>
      <span>간편 로그인하기</span>
      <ul className={styles.socialList}>
        <li>
          <Link
            className={styles.social}
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={googleLogo} alt="구글 간편 로그인하기" />
          </Link>
        </li>
        <li>
          <Link
            className={styles.social}
            href="https://www.kakaocorp.com/page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={kakaoLogo} alt="카카오톡 간편 로그인하기" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
