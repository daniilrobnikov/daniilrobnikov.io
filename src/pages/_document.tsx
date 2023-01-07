import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="group/html bg-[#4B5563]">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4B5563" />
        <meta name="msapplication-TileColor" content="#4B5563" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta data-react-helmet="true" name="theme-color" content="#4B5563" />
        <meta content="#4B5563" name="theme-color" />
        <meta name="robots" content="follow, index" />
        <meta
          property="og:title"
          content="Daniil Robnikov - Developer, Designer, Creator"
        />
        <meta
          property="og:description"
          content="Full-stack web developer, JavaScript enthusiast, and problem solver with a passion for creating intuitive and user-friendly web applications."
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
        <meta property="og:url" content="https://daniilrobnikov.com" />
        <link rel="canonical" href="https://daniilrobnikov.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Daniil Robnikov" />
        <Script
          id="dark-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
              ) {
                document.documentElement.classList.add("dark");
                document
                  .querySelector('meta[name="theme-color"]')
                  .setAttribute("content", "#1F2937");
              } else {
                document.documentElement.classList.remove("dark");
              }
              if (!("theme" in localStorage)) {
                document.documentElement.classList.add("system");
              }
            } catch (_) {}
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
