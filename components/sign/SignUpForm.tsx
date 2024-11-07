import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './Styled';
import Image from 'next/image';
import PandaLogo from '@/components/common/images/pandalogo.png';
import KakaoIcon from '@/components/common/images/ic_kakao.png';
import GoogleIcon from '@/components/common/images/ic_google.png';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { postSignUp } from '../api/api';
import { useRouter } from 'next/router';

export interface SignUpFormInputs {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpForm() {
  const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm<SignUpFormInputs>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState<boolean>(false);
  const password = watch("password");
  const router = useRouter();
  
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      const response = await postSignUp(data);
      if (response && response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
      }
      router.push('/sign/in');
    } catch (error) {
      console.log('회원가입 실패: ', error);
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
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "잘못된 이메일 형식입니다",
              },
            })}
            placeholder="이메일을 입력해주세요"
            onBlur={() => trigger("email")} 
          />
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        </S.InputBox>

        <S.InputBox>
          <S.Label>닉네임</S.Label>
          <S.Input
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
            })}
            placeholder="닉네임을 입력해주세요"
            onBlur={() => trigger("nickname")}
          />
          {errors.nickname && <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>}
        </S.InputBox>

        <S.InputBox>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type={passwordVisible ? 'text' : 'password'}
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 8,
                message: "비밀번호를 8자 이상 입력해주세요",
              },
            })}
            placeholder="비밀번호를 입력해주세요"
            onBlur={() => trigger("password")}
          />
          <S.VisibilityButton
            icon={passwordVisible ? faEye : faEyeSlash}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.InputBox>

        <S.InputBox>
          <S.Label>비밀번호 확인</S.Label>
          <S.Input
            type={passwordConfirmVisible ? 'text' : 'password'}
            {...register("passwordConfirm", {
              required: "비밀번호를 다시 입력해주세요",
              validate: (value) => value === password || "비밀번호가 일치하지 않습니다",
            })}
            placeholder="비밀번호를 입력해주세요"
            onBlur={() => trigger("passwordConfirm")}
          />
          <S.VisibilityButton
            icon={passwordConfirmVisible ? faEye : faEyeSlash}
            onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
          />
          {errors.passwordConfirm && <S.ErrorMessage>{errors.passwordConfirm.message}</S.ErrorMessage>}
        </S.InputBox>

        <S.SignupButton type="submit">
          회원가입
        </S.SignupButton>
      </S.Form>

      <S.SimpleLoginBox>
        <S.SimpleLoginText>간편 로그인하기</S.SimpleLoginText>
        <S.SimpleLoginSnsBox>
          <Link href="https://www.google.com/">
            <Image src={GoogleIcon} alt="구글 로그인" width={40} height={40} />
          </Link>
          <Link href="https://www.kakaocorp.com/page/">
            <Image src={KakaoIcon} alt="카카오톡 로그인" width={40} height={40} />
          </Link>
       
        </S.SimpleLoginSnsBox>
      </S.SimpleLoginBox>

      <S.AuthSwitchBox>
        <S.AuthSwitchText>이미 회원이신가요?</S.AuthSwitchText>
        <S.SwitchToLogin href="/sign/in">로그인</S.SwitchToLogin>
      </S.AuthSwitchBox>
    </S.AuthWrap>
  );
}