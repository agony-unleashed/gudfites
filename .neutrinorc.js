module.exports = {
  options: {
    output: 'docs'
  },

  use: [
    ['neutrino-preset-react',
      {
        html: {
          title: 'gudfites'
        }
      }
    ],

    neutrino => neutrino.config
      .entry('vendor')
      .add('react')
      .add('react-dom')
      .add('react-hot-loader')
  ]
}
