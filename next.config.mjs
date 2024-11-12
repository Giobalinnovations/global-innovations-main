/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
  // trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './ImageLoader.js',
  },
};

export default nextConfig;
