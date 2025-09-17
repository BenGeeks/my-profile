/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "udemy-certificate.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
