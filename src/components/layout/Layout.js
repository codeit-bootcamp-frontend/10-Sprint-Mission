import { Link, Outlet, useLocation } from "react-router-dom";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import logo from "../../assets/logo_w153x3.png";
import logoText from "../../assets/logo_w81x3.png";
import profileImage from "../../assets/profile_image_w40x3.png";
import "./Layout.css";

export default function Layout() {
  const { pathname } = useLocation();
  const media = useMediaQuery();

  const getLogo = (media) => {
    return media !== "MOBLE" ? logo : logoText;
  };

  const checkPath = (path) => {
    return pathname === path ? "header__navItem--active" : undefined;
  };

  return (
    <>
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
            <li className={checkPath("/boards")}>
              <Link to="/boards">자유게시판</Link>
            </li>
            <li className={checkPath("/items")}>
              <Link to="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
        <img className="header__profile" src={profileImage} alt="프로필 사진" />
      </header>
      <Outlet />
    </>
  );
}
