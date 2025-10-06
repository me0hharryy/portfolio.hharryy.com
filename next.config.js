/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
  
};

module.exports = nextConfig;
