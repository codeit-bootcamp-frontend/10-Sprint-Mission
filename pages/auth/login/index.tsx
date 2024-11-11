import { useEffect } from "react";
import {
  AuthContainer,
  LogoHomeLink,
  Form,
  AuthSwitch,
  SubmitButton,
} from "../AuthStyles";
import Logo from "@/public/images/logo/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InputItem from "@/components/ui/InputItem";
import SocialLogin from "../components/SocialLogin";
import PasswordInput from "../components/PasswordInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues } from "@/types/authTypes";
import { requestLogin } from "@/api/authApi";
import Image from "next/image";

const LoginPage: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const trimmedData: LoginFormValues = {
      email: data.email.trim(),
      password: data.password.trim(),
    };

    try {
      const result = await requestLogin(trimmedData);
      console.log(result);
      localStorage.setItem("accessToken", result.accessToken);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <AuthContainer>
      <LogoHomeLink href="/" aria-label="홈으로 이동">
        <Logo alt="판다마켓 로고" />
      </LogoHomeLink>

      <Form id="loginForm" method="post" onSubmit={handleSubmit(onSubmit)}>
        <InputItem
          id="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          register={register("email", {
            required: "이메일을 입력해 주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "잘못된 이메일 형식입니다",
            },
          })}
          setValue={setValue}
          trigger={trigger}
          errorMessage={errors.email?.message}
        />

        <PasswordInput
          id="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          register={register("password", {
            required: "비밀번호를 입력해 주세요",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해 주세요",
            },
          })}
          errorMessage={errors.password?.message}
        />

        <SubmitButton type="submit" disabled={!isValid}>
          로그인
        </SubmitButton>
      </Form>

      <SocialLogin />

      <AuthSwitch>
        판다마켓이 처음이신가요? <Link href="/auth/signup">회원가입</Link>
      </AuthSwitch>
    </AuthContainer>
  );
};

export default LoginPage;
