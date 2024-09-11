import { Link, NavLink } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="홈으로 이동" />
        <nav className="nav">
          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
        <img src={avatar} alt="아바타" />
      </div>
    </header>
  );
}

export default Header;
