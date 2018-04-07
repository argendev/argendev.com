module.exports = {
  dist: {
    files: {
      '<%= path.dist %>/css/<%= pkg.name %>.<%= pkg.version %>.min.css':
        '<%= path.src %>/sass/main.scss'
    },
    options: {
      sourceMap: true,
      outputStyle: 'compressed'
    }
  }
};
