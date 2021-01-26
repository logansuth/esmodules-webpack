const path = require('path');

module.exports = {
  entry: './src/game.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
