/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        pathname: "/Sprint_Mission/user/**",
      },
      { protocol: "https", hostname: "image.hanatour.com" },
    ],
  },
};

module.exports = nextConfig;
