module.exports = {
  options: {
    banner: '<%= banner %>',
    beautify: false,
    sourceMap: true
  },
  dist: {
    src: [
      '<%= concat.js.dest %>'
    ],
    dest: '<%= path.dist %>/js/<%= pkg.name %>.<%= pkg.version %>.min.js'
  }
};
