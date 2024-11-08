import React , { useEffect, useState }from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PandaLogo from '../common/images/pandalogo.png';
import ProfileImg from '../common/images/profile.png';
import * as HS from './Styled';


export default function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    const handleOnClick = () => {
        router.push('/sign/in')
    }
    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken')
        setIsLogin(!accessToken);
    })


    return (
        <HS.Header>
            <HS.HeaderContainer>
                <HS.HeaderWrap>
                    <Link href="/" passHref>
                        <HS.PandaLogo src={PandaLogo} alt="판다마켓로고"  priority />
                    </Link>
                    <HS.NavContainer>
                        <Link href="/boards" passHref>
                            <HS.NavLink className={router.pathname === '/boards' ? 'active' : ''}>
                                자유게시판
                            </HS.NavLink>
                        </Link>
                        <Link href="/items" passHref>
                            <HS.NavLink className={router.pathname === '/items' || router.pathname === '/addItem' ? 'active' : ''}>
                                중고마켓
                            </HS.NavLink>
                        </Link>
                    </HS.NavContainer>
                </HS.HeaderWrap>
                {isLogin ? (<HS.LoginButton onClick={handleOnClick}>로그인</HS.LoginButton>):
                (<HS.ProfileImg src={ProfileImg} alt="프로필 이미지" />)}
            </HS.HeaderContainer>
        </HS.Header>
    );
};
