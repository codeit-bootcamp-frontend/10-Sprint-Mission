import Image from "next/image";
import closedEye from "#/icons/eye_close.svg";
import styles from "./LogInForm.module.css";

export default function LogInForm() {
  return (
    <form className={styles.form} method="post">
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="emailInput">
          이메일
        </label>
        <input
          className={styles.input}
          id="emailInput"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요"
        />
        <span className={styles.error}></span>
      </div>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="passwordInput">
          비밀번호
        </label>
        <input
          className={styles.input}
          id="passwordInput"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
        <button className={styles.toggleButton} type="button">
          <Image src={closedEye} alt="비밀번호 보기" />
        </button>
        <span className={styles.error}></span>
      </div>
      <button className={styles.submitButton} type="submit">
        로그인
      </button>
    </form>
  );
}
