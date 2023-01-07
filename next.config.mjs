/** @type {import("next").NextConfig} */
/**
 * @tsCheck
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },

  swcMinify: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  images: {
    domains: ["images.unsplash.com", "tailwindui.com"],
  },
};

export default bundleAnalyzer(config);
