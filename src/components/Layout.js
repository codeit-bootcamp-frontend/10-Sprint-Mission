import { Link, Outlet } from "react-router-dom";

import profileImage from "../assets/profile_image_w40x3.png";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header className="header">
        <Link className="header__logo" to="/" aria-label="판다마켓 바로가기" />
        <nav className="header__nav">
          <ul className="header__navList">
            <li>
              <Link to="/">자유게시판</Link>
            </li>
            <li>
              <Link to="/items">중고마켓</Link>
            </li>
          </ul>
        </nav>
        <img className="header__profile" src={profileImage} alt="프로필 사진" />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
