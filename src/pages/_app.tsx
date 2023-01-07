import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";

const interVariable = Inter();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={interVariable.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
};

export default MyApp;
