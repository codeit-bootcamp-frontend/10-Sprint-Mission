import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderImg = styled.img`
  margin-left: 200px;
`;

const ProFile = styled.img`
  position: absolute;
  right: 200px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  width: 120px;
  height: 68px;
  padding: 21px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderImg src="/logo.png" alt="로고" />
      <Nav>
        <NavLink to={"/"}>자유게시판</NavLink>
        <NavLink to={"/items"}>중고마켓</NavLink>
      </Nav>
      <ProFile src="/profile.png" alt="프로파일" />
    </HeaderStyle>
  );
};

export default Header;
