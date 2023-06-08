import type { AppType } from "next/app";
import "../styles/globals.css";
import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import clsx from "clsx";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";



function usePrevious(value: string) {
  const ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const calSans = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  weight: "400",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});






const MyApp: AppType = ({
  Component,
  pageProps: {...pageProps },
  router,
}) => {
  const previousPathname = usePrevious(router.pathname);
  return (
    <>
    
          <main
            className={clsx(
              "relative flex min-h-screen flex-col justify-between bg-gradient-to-r from-neutral-100 to-white dark:bg-gradient-to-l dark:from-neutral-900 dark:to-black",
              calSans.variable,
              ibm.variable
            )}
          >
            <div>
             <Header/>
              <Component previousPathname={previousPathname} {...pageProps} />
            </div>
            <Footer/>
          </main>
        </>
     );
};

export default MyApp;
