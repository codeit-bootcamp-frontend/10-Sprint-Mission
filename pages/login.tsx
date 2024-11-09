import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import styles from "@/styles/Auth.module.css";
import pandaLogo from "@/public/panda_logo.svg";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.replace("/");
      return;
    }
    setLoading(false);
  }, [router]);

  if (loading) return null;

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
