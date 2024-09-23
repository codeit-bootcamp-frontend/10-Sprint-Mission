import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../assets/profile.png";

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`;

const HeaderImg = styled.img`
  margin-left: 200px;

  @media (max-width: 768px) {
    margin-left: 24px;
  }
`;

const ProFile = styled.img`
  position: absolute;
  right: 200px;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    right: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 32px;

  @media (max-width: 768px) {
    margin-left: 21px;
  }
`;

const Link = styled(NavLink)`
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

  &.active {
    color: #3692ff;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderImg src="/logo.png" alt="로고" />
      <Nav>
        <Link to={"/"}>자유게시판</Link>
        <Link to={"/additem"}>중고마켓</Link>
      </Nav>
      <ProFile src={ProfileImg} alt="프로파일" />
    </HeaderStyle>
  );
};

export default Header;
