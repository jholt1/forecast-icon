exports.config = {
  namespace: 'forecast',
  generateDistribution: true,
  bundles: [
    { components: ['forecast-icon'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
