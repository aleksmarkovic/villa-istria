/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },

  distDir: "build",

  i18n: {
    locales: ["en", "hr", "sl", "de", "it", "fr", "nl", "pl"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;
