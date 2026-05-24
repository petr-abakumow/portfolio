/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = 'portfolio'; // GitHub Pages: petr-abakumow.github.io/portfolio/

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${REPO_NAME}` : '',
  assetPrefix: isProd ? `/${REPO_NAME}/` : '',
};

export default nextConfig;
