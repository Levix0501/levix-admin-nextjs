const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@core'] = path.resolve(__dirname, 'src/@core');
    return config;
  },
};

module.exports = nextConfig;
