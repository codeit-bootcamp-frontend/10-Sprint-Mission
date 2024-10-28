import React, { ReactNode } from "react";
import Header from "./Header";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isAuthPage =
    router.pathname === "/login" || router.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Header />}
      <main className={isAuthPage ? "" : "withHeader"}>{children}</main>
    </>
  );
};

export default Layout;
