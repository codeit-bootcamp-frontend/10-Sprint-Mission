import { Link } from "react-router-dom";
import SignupForm from "features/AuthForm/components/SignupForm";
import styles from "./AuthPage.module.css";
import pandaLogo from "assets/images/panda_logo.svg";

const SignupPage = () => {
  return (
    <section className={`${styles.auth} ${styles.signup}`}>
      <Link to="/" className={styles.authLogo}>
        <img src={pandaLogo} alt="판다마켓 로고" />
      </Link>
      <SignupForm />
    </section>
  );
};

export default SignupPage;
