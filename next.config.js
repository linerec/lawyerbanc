/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextTranslate(nextConfig);
