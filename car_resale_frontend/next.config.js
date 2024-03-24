
  module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add a fallback configuration for util module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        util: require.resolve("util/")
      };
  
      return config;
    }
  };
  