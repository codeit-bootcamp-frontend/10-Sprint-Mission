import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import PandaLogo from "../../assets/images/pandalogo.png";
import ProfileImg from "../../assets/images/profile.png";
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="header-container">
        <div className="header-wrap">
          <Link to="/">
            <img className="panda-logo" src={PandaLogo} alt="판다마켓로고" />
          </Link>
          <div className="nav-container">
            <NavLink
              to="/community"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              className={({ isActive }) => (
                location.pathname === '/items' || location.pathname === '/addItem' ? 'active' : ''
              )}
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        <img className="profile-img" src={ProfileImg} alt="프로필 이미지" />
      </div>
    </header>
  );
}

export default Header;
