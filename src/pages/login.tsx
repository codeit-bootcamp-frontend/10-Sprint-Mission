import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LogInForm from "@/components/pages/account/LogInForm";
import SocialLogIn from "@/components/pages/account/SocialLogIn";
import logo from "#/images/logo_w153x3.png";
import styles from "./login.module.css";

export default function LogIn() {
  return (
    <>
      <Head>
        <title>로그인 - 판다마켓</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="홈페이지 바로가기" />
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <LogInForm />
          <SocialLogIn />
          <span className={styles.switch}>
            판다마켓이 처음이신가요?
            <Link className={styles.switchLink} href="/signup">
              회원가입
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}

LogIn.isNotLayout = true;
