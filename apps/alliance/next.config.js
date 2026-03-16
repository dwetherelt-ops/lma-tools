/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@like-minds/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
