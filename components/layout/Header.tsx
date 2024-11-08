import Logo from '@/public/images/logo/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { StyledLink } from '@/styles/CommonStyles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DefaultProfile from '@/public/images/ui/ic_profile.svg';

const GlobalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;


const HeaderLogo = styled(Link)`
  margin-right: 16px;

  @media (min-width: 768px) {
    margin-right: 35px;
  }

  @media (min-width: 1280px) {
    margin-right: 47px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  font-weight: bold;
  font-size: 16px;
  color: var(--gray-600);

  @media (min-width: 768px) {
    gap: 36px;
    font-size: 18px;
  }
`;

const NavItem = styled.li`
  a:hover {
    color: var(--blue);
  }
`;

const LoginLink = styled(StyledLink)``;

function getLinkStyle(isActive: boolean) {
  return { color: isActive ? 'var(--blue)' : undefined };
}

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 sessionStorage에서 토큰을 확인
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false 설정
  }, []);

  return (
    <GlobalHeader>
      <HeaderLeft>
        <HeaderLogo href='/' aria-label='홈으로 이동'>
          <Image src={Logo} alt='leftBtn' width={153} height={51} />
        </HeaderLogo>

        <nav>
          <NavList>
            <NavItem>
              <Link href='/boards' style={getLinkStyle(pathname === '/boards')}>
                자유게시판
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href='/items'
                style={getLinkStyle(
                  pathname.includes('/items') || pathname === '/additem'
                )}
              >
                중고마켓
              </Link>
            </NavItem>
          </NavList>
        </nav>
      </HeaderLeft>
      {isLoggedIn ? (
        // 로그인이 되어 있으면 판다 이미지 렌더링
        <Image src={DefaultProfile} alt='판다마켓 기본 프로필' width={40} height={40} />
      ) : (
        <LoginLink href='/login'>로그인</LoginLink>
      )}
    </GlobalHeader>
  );
};

export default Header;
