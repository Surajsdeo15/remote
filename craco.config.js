const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: process.env.REACT_APP_MODULE_FEDERATION_NAME || 'remote',
          filename: process.env.REACT_APP_REMOTE_ENTRY_FILE || 'remoteEntry.js',
          library: {
            type: 'var',
            name: process.env.REACT_APP_MODULE_FEDERATION_NAME || 'remote',
          },
          exposes: {
            './App': './src/App',
            './Profile': './src/Profile',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: false,
              eager: true,
            },
          },
        })
      );
      
      // Ensure output is set correctly
      if (!webpackConfig.output) {
        webpackConfig.output = {};
      }
      // Use 'auto' for development, explicit path for production
      const remoteUrl = 'https://remote-five-zeta.vercel.app'|| 'http://localhost:3001';
      webpackConfig.output.publicPath = process.env.NODE_ENV === 'production' 
        ? `${remoteUrl}/` 
        : 'auto';
      
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      port: Number(process.env.PORT) || 3001,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    };
  },
};

