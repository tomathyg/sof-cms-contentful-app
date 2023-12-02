/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // If you need a custom loader, you can uncomment the following line
    // loader: 'custom',
    formats: ['image/avif', 'image/webp'],
    //domains: ['images.ctfassets.net', 'scenes-images.soundoffractures.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'scenes-images.soundoffractures.com',
      },
    ],
  },
  webpack: (config) => {
    // Here we push your external dependencies to the webpack config
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig;
