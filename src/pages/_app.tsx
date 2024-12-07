import { ReactNode, Fragment } from "react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { UserProvider } from "@/store/UserContext";
import { MediaProvider } from "@/store/MediaContext";
import Layout from "@/components/layout/Layout";
import "@/styles/reset.css";
import "@/styles/variable.css";
import "@/styles/global.css";

export const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

function ProviderComponent({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <MediaProvider>{children}</MediaProvider>
    </UserProvider>
  );
}

type MyAppProps = AppProps & {
  Component: { isNotLayout?: boolean };
};

export default function App({ Component, pageProps }: MyAppProps) {
  const LayoutComponent = Component.isNotLayout ? Fragment : Layout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ProviderComponent>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ProviderComponent>
    </>
  );
}
