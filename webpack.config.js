const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig =  withModuleFederationPlugin({

  name: 'loginApp',

  exposes: {
    './LoginModule': './src/app/login/login.module.ts',
  },

  shared: share({
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto'  },
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto'  },
    '@angular/compiler': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto'  },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/animations': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  }),

});

module.exports = webpackConfig