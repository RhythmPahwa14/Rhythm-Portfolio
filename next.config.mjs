/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Enable cache with memory limits to improve performance
    config.cache = {
      type: 'memory',
      maxGenerations: 1,
    };
    return config;
  },
};

export default nextConfig;
