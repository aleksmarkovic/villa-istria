const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  ...{
    webpack(config, options) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };

      return config;
    },
  },
  images: {
    disableStaticImages: true,
  },
  optimizeImages: false,
});
