import "@/styles/reset.css";
import "@/styles/variables.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import styles from "@/styles/App.module.css";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000, refetchOnWindowFocus: false },
        },
      })
  );
  const router = useRouter();

  const isHideHeader = ["/login", "/signup"].includes(router.pathname);
  const isHomePage = router.pathname === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>판다 마켓</title>
      </Head>
      {!isHideHeader && <Header />}
      {isHomePage ? (
        <Component {...pageProps} />
      ) : (
        <Container className={!isHideHeader ? styles.container : ""} isPage>
          <Component {...pageProps} />
        </Container>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
