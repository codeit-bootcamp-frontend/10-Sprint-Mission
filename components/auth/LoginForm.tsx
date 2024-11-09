import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import FormInput from "../ui/FormInput";
import SocialLogin from "./SocialLogin";
import Button from "../ui/Button";
import styles from "./AuthForm.module.css";
import hideIcon from "@/public/btn_hide.svg";
import showIcon from "@/public/btn_show.svg";

interface FormValues extends Record<string, string> {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormValues>({ mode: "onChange" });
  const router = useRouter();
  const { login } = useAuth();

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message === "존재하지 않는 이메일입니다.") {
          setError("email", { type: "manual", message: err.message });
        }
        if (err.message === "비밀번호가 일치하지 않습니다.") {
          setError("password", { type: "manual", message: err.message });
        }
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        className={styles.input}
        type="text"
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        register={register}
        required="이메일을 입력해주세요."
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "잘못된 이메일 형식입니다.",
        }}
        error={errors.email}
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
      <Button className={styles.button} type="submit" disabled={!isValid}>
        로그인
      </Button>
      <SocialLogin />
      <span className={styles.authLink}>
        판다마켓이 처음이신가요?
        <Link href="/signup">회원가입</Link>
      </span>
    </form>
  );
};

export default LoginForm;
