import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import styles from "@/styles/Auth.module.css";
import pandaLogo from "@/public/panda_logo.svg";

const Login = () => {
  return (
    <section className={`${styles.auth} ${styles.login}`}>
      <Link href="/" className={styles.authLogo}>
        <Image src={pandaLogo} alt="판다마켓 로고" />
      </Link>
      <LoginForm />
    </section>
  );
};

export default Login;
