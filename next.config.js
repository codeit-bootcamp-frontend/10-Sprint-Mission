/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
      'example.com',
      'via.placeholder.com',
      'flexible.img.hani.co.kr',
    ],
  },
};

module.exports = nextConfig;
