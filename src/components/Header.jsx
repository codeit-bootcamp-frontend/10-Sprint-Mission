import logo from 'assets/imgs/logo_sm.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import UserIcon from 'assets/imgs/user_icon.svg';
import { useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <header className={styles.header}>
      {isLogin ?
        <div>
          <Link to="/"><img src={logo} alt="로고" /></Link>
          <Link to="/free"><p>자유게시판</p></Link>
          <Link to="/goods"><p>중고마켓</p></Link>
          <span><img src={UserIcon} /></span>
        </div>
        :
        <div>
          <Link to="/"><img src={logo} alt="로고" /></Link>
          <button>로그인</button>
        </div>
      }
    </header>
  );
}

export default Header;