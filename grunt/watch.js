module.exports = {
  gruntfile: {
    files: ['Gruntfile.js', 'grunt/{,**/}*.{js,json,yml,hbs}'],
    tasks: ['build']
  },
  css: {
    files: '<%= path.src %>/sass/{,**/}*.scss',
    tasks: ['css'],
    options: {
      livereload: true
    }
  },
  js: {
    files: '<%= path.src %>/js/{,**/}*.js',
    tasks: ['js'],
    options: {
      livereload: true
    }
  },
  html: {
    files: '<%= path.src %>/{,**/}*.hbs',
    tasks: ['writefile'],
    options: {
      livereload: true
    }
  }
};
