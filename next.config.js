// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/fako-dallas-website',
};

module.exports = nextConfig;
