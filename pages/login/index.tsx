import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import IconEyeInVisible from '@/public/images/icons/eye-invisible.svg';
import IconEyeVisible from '@/public/images/icons/eye-visible.svg';
import Logo from '@/public/images/logo/logo.svg';

function LoginPage(): React.ReactElement {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token');
    if (accessToken) {
      router.push('/');
    }
  }, [router]);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://panda-market-api.vercel.app/auth/signIn',
        {
          email,
          password,
        }
      );
      const result = await res.data;

      if (res.status === 200) {
        alert('로그인 성공!');
        setLoginCheck(true);
        sessionStorage.setItem('token', result.accessToken); // 여기서 토큰을 저장합니다.

        router.push('/');
      } else {
        setLoginCheck(false);
      }
    } catch (err) {
      console.error('로그인 실패: ' + err);
    }
  };

  return (
    <section>
      <h2>
        <Link href='/' aria-label='홈으로 이동'>
          <Image
            src={Logo}
            width={396}
            height={132}
            alt='판다마켓 로고'
            placeholder='blur'
            blurDataURL={Logo.src}
          />
        </Link>
      </h2>
      <form action='#' method='post'>
        <label htmlFor='email'>이메일</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          id='email'
          placeholder='이메일을 입력해주세요'
          required
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호를 입력해주세요'
          required
        />
        <button aria-label='비밀번호 보기'>
          <Image src={IconEyeInVisible} alt='비밀번호 숨기기 아이콘' />
          <Image src={IconEyeVisible} alt='비밀번호 보기 아이콘' />
        </button>
        <button onClick={handleLogin} type='submit'>
          로그인
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
