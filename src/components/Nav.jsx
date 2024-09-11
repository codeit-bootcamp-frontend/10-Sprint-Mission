/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from './Container';
import styles from './Nav.module.css';
import logoImg from '../assets/images/logo-sm.png';
import profileImg from '../assets/images/ic-profile.svg';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692ff' : undefined,
  };
}

function Nav({ pathname }) {
  
  const isActive = pathname === '/additem';

  const style = getLinkStyle({ isActive });

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.menuList}>
          <Link to='/'>
            <img src={logoImg} alt='판다마켓 로고' />
          </Link>
          <ul className={styles.menu}>
            <li>자유게시판</li>
            <li>
              <NavLink to='/items' style={style}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.profile}>
          <Link to={''}>
            <img src={profileImg} alt='프로필 이미지' />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
