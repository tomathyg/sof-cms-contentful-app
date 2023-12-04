/** @type {import('next').NextConfig} */
const generateSceneImageRewrites = require('./lib/generateSceneImageRewrites');
const nextConfig = {
  images: {
    // If you need a custom loader, you can uncomment the following line
    // loader: 'custom',
    //loaderFile: './my/image/loader.js',
    //loader: 'custom',
    //loaderFile: './app/imageLoaders/contentfulLoader.js',
    /*loaders: [
      {
        name: 'default',
        loaderFile: 'https://example.com/mydefaultloader/',
      },
      {
        name: 'custom',
        loaderFile: './imageLoaders/contentfulLoader.js',
      },
    ],*/
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
  webpack: (config, options) => {
    // Here we push your external dependencies to the webpack config
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // SVGR options
          }
        }
      ]
    });
    return config;
  },
  async rewrites() {
    const sceneImageRewrites = await generateSceneImageRewrites();
    return sceneImageRewrites;
    /*[
      {
        source: '/test',
        destination: '/',
      },
    ]*/
  },
};

module.exports = nextConfig;


