import styled from "styled-components";
import Image from 'next/image';

// Layout
export const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LayoutContent = styled.div`
    width:100%;
`;

// Header
export const Header = styled.header`
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    height: 70px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid #DFDFDF;
    background: #FFF;
`;

export const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    align-self: stretch;

    @media (max-width: 1199px) {
        margin: 0 24px;
    }

    @media (max-width: 767px) {
        margin: 0 16px;
    }
`;

export const HeaderWrap = styled.div`
    width: 386px;
    display: flex;
    justify-content: left;
    gap: 32px;

    @media (max-width: 1199px) {
        gap: 20px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 30px;
`;

export const NavLink = styled.div`
    color: var(--Secondary-600, #4B5563);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; 
    text-decoration: none;

    &.active {
        color: #3692FF; 
    }
`;

export const PandaLogo = styled(Image)`
    width: 153px;
    height:51px;
    @media (max-width: 767px) {
        width: 81px;
        height: 27px;
    }
`;

export const ProfileImg = styled(Image)`
    width: 40px; 
    border-radius: 50%; 
`;