module.exports = {
  assets: {
    cwd: '<%= path.src %>',
    src: ['favicon/**', 'images/**', 'fonts/**'],
    dest: '<%= path.dist %>',
    expand: true
  }
};
