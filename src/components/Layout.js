import { Link, Outlet, useLocation } from "react-router-dom";

import profileImage from "../assets/profile_image_w40x3.png";
import "./Layout.css";

export default function Layout() {
  const { pathname } = useLocation();

  const checkPath = (path) => {
    return pathname === path ? "header__navItem--active" : undefined;
  };

  return (
    <>
      <header className="header">
        <Link className="header__logo" to="/" aria-label="판다마켓 바로가기" />
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
