import React from "react";
import "./Header.css";
import logoImg from "../../assets/images/logo/logo.svg";
import profileImg from "../../assets/images/icons/ic_profile.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logoImg">
          <img src={logoImg} alt="logo" />
        </Link>
        <Link
          to="/freeboard"
          className={`nav-link ${currentPath === "/freechat" ? "active" : ""}`}
        >
          자유게시판
        </Link>
        <Link
          to="/items"
          className={`nav-link ${
            currentPath === "/items" || currentPath.startsWith("/additems")
              ? "active"
              : ""
          }`}
        >
          중고마켓
        </Link>
      </div>
      <Link to="/profile" className="profileImg">
        <img src={profileImg} alt="profile" />
      </Link>
    </header>
  );
}

export default Header;
