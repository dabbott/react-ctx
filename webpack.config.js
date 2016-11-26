module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'react-ctx.js',
    library: 'react-ctx',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {test: /.js$/, use: 'babel-loader'}
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
}
