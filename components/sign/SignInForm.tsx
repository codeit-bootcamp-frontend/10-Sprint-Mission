import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './Styled';
import Image from 'next/image';
import PandaLogo from '@/components/common/images/pandalogo.png';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { postSignIn } from '../api/api'; 
import Link from 'next/link';

export interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInputs>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const response = await postSignIn(data);
      localStorage.setItem('accessToken', response.accessToken); 
      router.push('/'); 
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    
    <S.AuthWrap>
        <S.HomeButton>
            <Image src={PandaLogo} alt="홈버튼" width={396} />
        </S.HomeButton>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.InputBox>
            <S.Label>이메일</S.Label>
            <S.Input
                type="email"
                {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "잘못된 이메일 형식입니다",
                },
                })}
                placeholder="이메일을 입력해주세요"
            />
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
            </S.InputBox>

            <S.InputBox>
            <S.Label>비밀번호</S.Label>
            <S.Input
                type={passwordVisible ? 'text' : 'password'}
                {...register("password", {
                required: "비밀번호를 입력해주세요",
                })}
                placeholder="비밀번호를 입력해주세요"
            />
            <S.VisibilityButton
                icon={passwordVisible ? faEye : faEyeSlash}
                onClick={() => setPasswordVisible(!passwordVisible)}
            />
            {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
            </S.InputBox>

            <S.SignupButton type="submit">
            로그인
            </S.SignupButton>
        </S.Form>

      <S.AuthSwitchBox>
        <S.AuthSwitchText>계정이 없으신가요?</S.AuthSwitchText>
        <Link href="/sign/up">
          <S.SwitchToLogin>회원가입</S.SwitchToLogin>
        </Link>
      </S.AuthSwitchBox>
    </S.AuthWrap>
  );
}