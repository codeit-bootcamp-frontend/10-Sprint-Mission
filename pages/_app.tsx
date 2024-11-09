import "@/styles/reset.css";
import "@/styles/variables.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHideHeader = ["/login", "/signup"].includes(router.pathname);
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Head>
        <title>판다 마켓</title>
      </Head>
      {!isHideHeader && <Header />}
      {isHomePage ? (
        <Component {...pageProps} />
      ) : (
        <Container isPage>
          <Component {...pageProps} />
        </Container>
      )}
    </>
  );
}
