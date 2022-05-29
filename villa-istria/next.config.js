const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
});
