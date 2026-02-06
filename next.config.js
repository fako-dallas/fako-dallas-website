// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: 'https://github.com/fako-dallas/fako-dallas-website',
};

module.exports = nextConfig;
