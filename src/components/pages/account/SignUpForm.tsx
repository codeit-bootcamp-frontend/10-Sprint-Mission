import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PostSignUpParams, PostSignUpRes } from "@/apis/apis.type";
import { useQuery } from "@/hooks/useQuery";
import { postSignUp } from "@/apis/apis";
import closedEye from "#/icons/eye_close.svg";
import styles from "./SignUpForm.module.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState<PostSignUpParams>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  const { error, data, query } = useQuery<PostSignUpParams, PostSignUpRes>(
    postSignUp
  );
  const { replace } = useRouter();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    query(formData);

    if (error || !data) {
      alert("회원가입에 실패했습니다.\n다시 시도해 주세요!");
      return;
    }

    alert("회원가입에 성공했습니다.\n로그인 후 이용해 주세요!");
    replace("/login");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      const nextData = { ...prevData };
      nextData[e.target.name as keyof PostSignUpParams] = e.target.value;
      return nextData;
    });
  };

  return (
    <form className={styles.form} method="post" onSubmit={handleFormSubmit}>
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
          value={formData.email}
          onChange={handleInputChange}
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
          value={formData.nickname}
          onChange={handleInputChange}
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
          value={formData.password}
          onChange={handleInputChange}
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
          name="passwordConfirmation"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
          value={formData.passwordConfirmation}
          onChange={handleInputChange}
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
