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
      // {
      //   protocol: 'https',
      //   hostname: '**',
      // },
      // {
      //   protocol: 'http',
      // }
      {
        protocol: 'https',
        hostname: 'storagegi.s3.amazonaws.com',
      },
    ],
    domains: ['localhost', 'your-api-domain.com'],
  },
};

export default nextConfig;
