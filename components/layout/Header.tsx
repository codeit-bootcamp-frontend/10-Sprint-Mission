import Logo from "@/public/images/logo/logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  GlobalHeader,
  HeaderLeft,
  HeaderLogo,
  LoginLink,
  NavItem,
  NavList,
} from "./Header.styles";

function getLinkStyle(isActive: boolean) {
  return { color: isActive ? "var(--blue)" : undefined };
}

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <GlobalHeader>
      <HeaderLeft>
        <HeaderLogo href="/" aria-label="홈으로 이동">
          <Logo alt="판다마켓 로고" width="153" />
        </HeaderLogo>

        <nav>
          <NavList>
            <NavItem>
              <Link href="/boards" style={getLinkStyle(pathname === "/boards")}>
                자유게시판
              </Link>
            </NavItem>
            <NavItem>
              <Link
                href="/items"
                style={getLinkStyle(
                  pathname.includes("/items") || pathname === "/additem"
                )}
              >
                중고마켓
              </Link>
            </NavItem>
          </NavList>
        </nav>
      </HeaderLeft>

      <LoginLink href="/login">로그인</LoginLink>
    </GlobalHeader>
  );
};

export default Header;
