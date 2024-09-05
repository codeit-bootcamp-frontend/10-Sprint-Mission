import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <header className="Header">
      <div className="header-container">
        <div
          className="logo"
          onClick={handleImageClick}
          aria-label="홈으로 이동"
        ></div>
        <nav className="nav">
          <ul className="nav-menu">
            <li>자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </nav>
        <img src={avatar} alt="아바타" />
      </div>
    </header>
  );
}

export default Header;
