const path = require('path');
var prod = process.env.NODE_ENV === 'production';
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      themes: path.join(__dirname, 'src', 'themes'),
      coms: path.join(__dirname, 'src', 'components'),
    },
    aliasFields: ['wepy'],
    modules: ['node_modules'],
  },
  compilers: {
    less: {
      compress: !!prod,
      plugins: [
        new LessPluginAutoPrefix({ browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6'] }),
      ],
    },
    pug: {},
    babel: {
      sourceMap: !prod,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'lodash',
      ],
    },
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
  },
};

if (prod) {
  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {},
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
      },
    },
  };
}
