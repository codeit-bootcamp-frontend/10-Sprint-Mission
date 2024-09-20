import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo-sm.png';
import profileImg from '../assets/images/ic-profile.svg';
import { css } from '@emotion/react';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692ff' : undefined,
  };
}

function Nav() {
  const location = useLocation();

  const isActive = location.pathname === '/additem';

  const style = getLinkStyle({ isActive });

  return (
    <div css={[nav, container]}>
      <div css={container}>
        <Link to='/'>
          <img src={logoImg} alt='판다마켓 로고' />
        </Link>
        <ul css={menu}>
          <li>자유게시판</li>
          <li>
            <NavLink to='/additem' style={style}>
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>
      <div css={profile}>
        <Link to={''}>
          <img src={profileImg} alt='프로필 이미지' />
        </Link>
      </div>
    </div>
  );
}

const nav = css`
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
  padding: 1rem 20rem;
`;

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const menu = css`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  > li:not(:last-child) {
    margin-right: 30px;
  }

  li:first-child {
    margin-left: 3.2rem;
  }

  > li,
  > li > a {
    color: var(--Gray-600);
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const profile = css`
  background-color: #d1d5db;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;

export default Nav;
