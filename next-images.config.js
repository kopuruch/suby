module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API_HOST,
        port: '',
        pathname: '/storage/file/**',
      },
    ],
  },
}