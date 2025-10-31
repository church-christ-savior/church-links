/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/church-links',   
  assetPrefix: '/church-links/',
};

export default nextConfig;
