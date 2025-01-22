const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'https://github.com/tintinguy01/pomo-time' : '',
  basePath: isProd ? 'https://github.com/tintinguy01/pomo-time' : '',
  output: 'export'
};

export default nextConfig;