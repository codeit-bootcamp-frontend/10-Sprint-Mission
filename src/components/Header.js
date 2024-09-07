import logo from 'assets/imgs/logo_sm.svg';
import { Link } from 'react-router-dom';
import styles from 'styles/header.module.css';
import UserIcon from 'assets/imgs/user_icon.svg';

const Header = () => {
  cosnt[isLogin, setIsLogin] = useState(true);

  return (
    <header className={styles.header}>
      {isLogin ?
        <div>
          <Link to="/"><img src={logo} alt="로고" /></Link>
          <Link to="/free"><p>자유게시판</p></Link>
          <Link to="/goods"><p>중고마켓</p></Link>
          <butotn><img src={UserIcon} /></butotn>
        </div>
        :
        <div>
          <Link to="/"><img src={logo} alt="로고" /></Link>
          <butotn>로그인</butotn>
        </div>
      }
    </header>
  );
}

export default Header;