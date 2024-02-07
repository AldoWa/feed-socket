/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'cloudflare-ipfs.com',
        protocol: 'https'
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
