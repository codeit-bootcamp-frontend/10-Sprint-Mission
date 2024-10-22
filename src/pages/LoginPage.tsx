import { Link } from "react-router-dom";
import LoginForm from "features/AuthForm/components/LoginForm";
import styles from "./AuthPage.module.css";
import pandaLogo from "assets/images/panda_logo.svg";

const LoginPage = () => {
  return (
    <section className={`${styles.auth} ${styles.login}`}>
      <Link to="/" className={styles.authLogo}>
        <img src={pandaLogo} alt="판다마켓 로고" />
      </Link>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
