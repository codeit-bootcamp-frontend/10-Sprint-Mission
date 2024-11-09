import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PostLogInParams, PostLogInRes } from "@/apis/apis.type";
import { useQuery } from "@/hooks/useQuery";
import { postLogIn } from "@/apis/apis";
import closedEye from "#/icons/eye_close.svg";
import styles from "./LogInForm.module.css";

export default function LogInForm() {
  const [formData, setFormData] = useState<PostLogInParams>({
    email: "",
    password: "",
  });
  const { error, data, query } = useQuery<PostLogInParams, PostLogInRes>(
    postLogIn
  );
  const { replace } = useRouter();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await query(formData);

    if (error || !data) {
      alert("로그인에 실패했습니다.\n다시 시도해 주세요!");
      return;
    }

    window.localStorage.setItem("accessToken", data.accessToken);
    window.localStorage.setItem("refreshToken", data.refreshToken);
    alert("로그인에 성공했습니다.\n즐거운 판다마켓 되세요!");
    replace("/");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      const nextData = { ...prevData };
      nextData[e.target.name as keyof PostLogInParams] = e.target.value;
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
      <button className={styles.submitButton} type="submit">
        로그인
      </button>
    </form>
  );
}
