const { i18n } = require("./next-i18next.config");
// const { images } = require("./next-images.config");


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [576, 768, 992, 1200, 1441],
  },
}

module.exports = nextConfig
