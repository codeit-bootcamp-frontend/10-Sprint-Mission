import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import pandaTypoImg from "../assets/panda_typo.svg";
import profileImg from "../assets/ic_profile.svg";

function getLinkStyle({ isActive }) {
  return isActive ? styles.active : "";
}

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <Link to="/">
            <img
              src={pandaTypoImg}
              className={styles.logo}
              alt="판다마켓 로고"
            />
          </Link>
        </li>
        <li>자유게시판</li>
        <li>
          <NavLink to="/items" className={getLinkStyle}>
            중고마켓
          </NavLink>
        </li>
      </ul>
      <Link to="/login">
        <img src={profileImg} className={styles.profile} alt="프로필" />
      </Link>
    </header>
  );
};

export default Header;
