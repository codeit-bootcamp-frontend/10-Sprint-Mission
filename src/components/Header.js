import { useNavigate } from 'react-router-dom';
import logo from '../assets/panda_logo.svg';
import avatar from '../assets/avatar.svg';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <header className="Header">
      <div className="header-container max-container">
        <img src={logo} alt="판다마켓 로고" onClick={handleImageClick} />
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
