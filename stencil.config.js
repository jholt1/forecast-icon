exports.config = {
  bundles: [
    { components: ['forecast-icon'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
