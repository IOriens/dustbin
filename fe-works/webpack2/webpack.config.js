module.exports = {
  entry: {
    cjs: './importer-cjs',
    es: './exporter'
  },
  output: {
    filename: '[name]-bundle.js'
  }
}
