/** @type {import('next').NextConfig} */

const nextConfig = {
  //   output: 'export',
  //   trailingSlash: true,
  //   images: {
  //     loader: 'custom',
  //     loaderFile: './ImageLoader.js',
  //   },

  // new
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
