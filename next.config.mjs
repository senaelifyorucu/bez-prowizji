/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bez-prowizji.pl',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'api.procode.pl',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

export default nextConfig;
