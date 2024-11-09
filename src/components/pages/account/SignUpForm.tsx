import Image from "next/image";
import closedEye from "#/icons/eye_close.svg";
import styles from "./SignUpForm.module.css";

export default function SignUpForm() {
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
        <label className={styles.label} htmlFor="nicknameInput">
          닉네임
        </label>
        <input
          className={styles.input}
          id="nicknameInput"
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해 주세요"
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
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="passwordConfirmInput">
          비밀번호 확인
        </label>
        <input
          className={styles.input}
          id="passwordConfirmInput"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
        />
        <button className={styles.toggleButton} type="button">
          <Image src={closedEye} alt="비밀번호 보기" />
        </button>
        <span className={styles.error}></span>
      </div>
      <button className={styles.submitButton} type="submit">
        회원가입
      </button>
    </form>
  );
}
