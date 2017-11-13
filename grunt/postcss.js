module.exports = {
  options: {
    processors: [
      require('autoprefixer')({
        browsers: [
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'ie 10',
          'ie 11'
        ]
      })
    ]
  },
  dist: {
    src: '<%= path.dist %>/css/<%= pkg.name %>.<%= pkg.version %>.css'
  }
};
