import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SignUpForm from "@/components/pages/account/SignUpForm";
import SocialLogIn from "@/components/pages/account/SocialLogIn";
import logo from "#/images/logo_w153x3.png";
import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>회원가입 - 판다마켓</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="홈페이지 바로가기" />
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <SignUpForm />
          <SocialLogIn />
          <span className={styles.switch}>
            이미 회원이신가요?
            <Link className={styles.switchLink} href="/login">
              로그인
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}

SignUp.isNotLayout = true;
