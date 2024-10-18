import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../assets/logo_w153x3.png";
import logoText from "../../assets/logo_w81x3.png";
import profileImage from "../../assets/profile_image_w40x3.png";
import "./Header.css";

export default function Header() {
  const media = useMediaQuery();

  const getLogo = (media) => {
    return media !== "MOBLE" ? logo : logoText;
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={getLogo(media)}
          alt="판다마켓 바로가기"
        />
      </Link>
      <nav className="header__nav">
        <ul className="header__navList">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navItem--active" : undefined
              }
              to="/boards"
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navItem--active" : undefined
              }
              to="/items"
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
      </nav>
      <img className="header__profile" src={profileImage} alt="프로필 사진" />
    </header>
  );
}
