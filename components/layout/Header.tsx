import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PandaLogo from '../common/images/pandalogo.png';
import ProfileImg from '../common/images/profile.png';
import * as HS from './Styled';


export default function Header() {
    const router = useRouter();

    return (
        <HS.Header>
            <HS.HeaderContainer>
                <HS.HeaderWrap>
                    <Link href="/" passHref>
                        <HS.PandaLogo src={PandaLogo} alt="판다마켓로고" />
                    </Link>
                    <HS.NavContainer>
                        <Link href="/community" passHref>
                            <HS.NavLink className={router.pathname === '/community' ? 'active' : ''}>
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
                <HS.ProfileImg src={ProfileImg} alt="프로필 이미지" />
            </HS.HeaderContainer>
        </HS.Header>
    );
};
