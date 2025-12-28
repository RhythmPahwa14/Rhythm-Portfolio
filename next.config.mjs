/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable webpack cache to prevent memory issues
    config.cache = false;
    return config;
  },
};

export default nextConfig;
