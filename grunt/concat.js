module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },
  vendor: {
    src: [
      // Include your JS dependencies here.
      // For Bootstrap JS plugins, import them individually like:
      // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js'
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/scrolltofixed/jquery-scrolltofixed-min.js',
      'node_modules/jquery-validation/dist/jquery.validate.js',
      'node_modules/svgxuse/svgxuse.min.js'
    ],
    dest: '<%= path.temp %>/js/vendor.js'
  },
  modules: {
    src: [
      '<%= path.src %>/js/main.js',
      '<%= path.src %>/js/modules/*.js'
    ],
    dest: '<%= path.temp %>/js/modules.js'
  },
  js: {
    src: [
      '<%= concat.vendor.dest %>',
      '<%= concat.modules.dest %>'
    ],
    dest: '<%= path.temp %>/js/all.js'
  }
};
