import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";
import styles from "./AuthForm.module.css";
import hideIcon from "@/public/btn_hide.svg";
import showIcon from "@/public/btn_show.svg";
import kakaoIcon from "@/public/ic_kakao.svg";
import googleIcon from "@/public/ic_google.svg";

interface FormValues extends Record<string, string> {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
    trigger,
  } = useForm<FormValues>({ mode: "onChange" });
  const router = useRouter();
  const { signup } = useAuth();
  const watchedPassword = watch("password");

  const onSubmit = async (data: FormValues) => {
    try {
      await signup(data);
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message === "이미 사용중인 이메일입니다.") {
          setError("email", { type: "manual", message: err.message });
        }
        if (err.message === "이미 사용중인 닉네임입니다.") {
          setError("nickname", { type: "manual", message: err.message });
        }
      }
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordConfirmationVisibility = () =>
    setShowPasswordConfirmation(!showPasswordConfirmation);

  useEffect(() => {
    if (watchedPassword) {
      trigger("passwordConfirmation");
    }
  }, [watchedPassword, trigger]);

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        className={styles.input}
        type="text"
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        register={register}
        required="이메일을 입력해주세요"
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "잘못된 이메일 형식입니다.",
        }}
        error={errors.email}
      />
      <FormInput
        className={styles.input}
        type="text"
        name="nickname"
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        register={register}
        required="닉네임을 입력해주세요"
        error={errors.nickname}
      />
      <FormInput
        className={styles.input}
        type={showPassword ? "text" : "password"}
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        register={register}
        required="비밀번호를 입력해주세요."
        minLength={{
          value: 8,
          message: "비밀번호를 8자 이상 입력해주세요.",
        }}
        error={errors.password}
      >
        <Image
          src={showPassword ? showIcon : hideIcon}
          className={styles.btnEye}
          onClick={togglePasswordVisibility}
          alt="비밀번호 표시"
        />
      </FormInput>
      <FormInput
        className={styles.input}
        type={showPasswordConfirmation ? "text" : "password"}
        name="passwordConfirmation"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        register={register}
        validate={{
          matchesPassword: (value) =>
            value === watchedPassword || "비밀번호가 일치하지 않습니다.",
          required: (value) => value !== "" || "비밀번호 확인을 입력해주세요.",
        }}
        error={errors.passwordConfirmation}
      >
        <Image
          src={showPasswordConfirmation ? showIcon : hideIcon}
          className={styles.btnEye}
          onClick={togglePasswordConfirmationVisibility}
          alt="비밀번호 표시"
        />
      </FormInput>
      <Button className={styles.button} type="submit" disabled={!isValid}>
        회원가입
      </Button>
      <div className={styles.otherAccount}>
        <span>간편 로그인하기</span>
        <div className={styles.iconContainer}>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={googleIcon} alt="구글 로그인" />
          </a>
          <a
            href="https://www.kakaocorp.com/page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={kakaoIcon} alt="카카오 로그인" />
          </a>
        </div>
      </div>
      <span className={styles.authLink}>
        이미 회원이신가요?
        <Link href="/login">로그인</Link>
      </span>
    </form>
  );
};

export default LoginForm;
