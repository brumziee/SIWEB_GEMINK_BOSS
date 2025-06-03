/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: 20 * 1024 * 1024, // 20 MB
  },
};

module.exports = nextConfig;
