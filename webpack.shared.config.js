const { DefinePlugin } = require('webpack')
const DotenvPlugin = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`
    }),
    new DotenvPlugin({
      path: `./${process.env.ENV_FILE || '.env.default'}`
    }),
    new CopyPlugin([
      { from: 'public', to: '.' }
    ])
  ]
}
