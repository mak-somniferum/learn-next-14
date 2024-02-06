/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/movie',
      },
    ];
  },
};

module.exports = nextConfig;
