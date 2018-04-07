module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },
  vendor: {
    src: [
      // Include your JS dependencies here. For instance:
      // 'node_modules/jquery/dist/jquery.min.js',
      // For Bootstrap JS plugins, import them individually like:
      // 'node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js'
    ],
    dest: '<%= path.temp %>/js/vendor.js'
  },
  modules: {
    src: ['<%= path.src %>/js/main.js'],
    dest: '<%= path.temp %>/js/modules.js'
  },
  js: {
    src: ['<%= concat.vendor.dest %>', '<%= concat.modules.dest %>'],
    dest: '<%= path.temp %>/js/all.js'
  }
};
