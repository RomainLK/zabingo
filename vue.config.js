const path = require('path')

module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          '@' : path.resolve(__dirname, 'src/'),
        }
      }
    },
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      }
    }
}