/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
