module.exports = {
  options: {
    output: 'docs'
  },

  use: [
    'neutrino-preset-react',
    neutrino => neutrino.config
      .entry('vendor')
      .add('react')
      .add('react-dom')
      .add('react-hot-loader')
  ]
}
