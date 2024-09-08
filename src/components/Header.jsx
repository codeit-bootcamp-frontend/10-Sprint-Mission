import {ReactComponent as Logo} from 'assets/imgs/logo_sm.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {ReactComponent as UserIcon} from 'assets/imgs/user_icon.svg';
import { useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <header className={styles['header']}>
        {isLogin ?
          <div className={styles['header-container']}>
            <Link to="/"><Logo/></Link>
            <nav className={styles['header-nav']}>
              <Link to="/free"><p>자유게시판</p></Link>
              <Link to="/goods"><p>중고마켓</p></Link>
            </nav>
            <UserIcon className={styles['user-icon']}/>
          </div>
          :
          <div className={styles['header-container']}>
            <Link to="/"><Logo/></Link>
            <button>로그인</button>
          </div>
        }
      </header>
  );
}

export default Header;