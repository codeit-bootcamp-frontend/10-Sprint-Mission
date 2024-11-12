import Image from "next/image";
import Container from "../layout/Container";
import styles from "./SocialLogin.module.css";
import kakaoIcon from "@/public/ic_kakao.svg";
import googleIcon from "@/public/ic_google.svg";

const SocialLogin = () => {
  return (
    <div className={styles.socialLogin}>
      <span>간편 로그인하기</span>
      <Container className={styles.container}>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={googleIcon} alt="구글 로그인" />
        </a>
        <a
          href="https://www.kakaocorp.com/page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={kakaoIcon} alt="카카오 로그인" />
        </a>
      </Container>
    </div>
  );
};

export default SocialLogin;
