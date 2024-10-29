import * as LS from "./Styled";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }
  
export default function Layout({ children } : LayoutProps) {
  return (
    <LS.LayoutWrapper>
      {children}
    </LS.LayoutWrapper>
  );
}
