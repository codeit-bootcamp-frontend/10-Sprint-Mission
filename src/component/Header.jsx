import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="로고" />
      <nav>
        <Link to={"/"}>자유게시판</Link>
        <Link to={"/items"}>중고마켓</Link>
      </nav>
      <img className="profile" src="/profile.png" alt="프로파일" />
    </header>
  )
}

export default Header;