import Logo from '@/public/images/logo/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

function LoginPage(): React.ReactElement {
  return (
    <section>
      <h2>
        <Link href='/' aria-label='홈으로 이동'>
          <Image src={Logo} width={396} height={132} alt='판다마켓 로고' />
        </Link>
      </h2>
    </section>
  );
}

export default LoginPage;
