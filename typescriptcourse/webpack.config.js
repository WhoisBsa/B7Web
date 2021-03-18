const path = require('path');

module.exports = {
  mode:'production',
  entry:'./src/teste.ts',
  output:{
    path:path.resolve(__dirname, 'public'),
    filename:'teste.js',
  },
  module:{
    rules:[
      {
        test:/\.ts(x?)$/,
        exclude:'/node_modules',
        use:'ts-loader'
      }
    ]
  }
}