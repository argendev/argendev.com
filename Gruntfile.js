module.exports = function (grunt) {
  'use strict';

  var options = {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      banner: '/* <%= pkg.title || pkg.name %> ' +
        '- v<%= pkg.version %> - ' +
        'Build date: <%= grunt.template.today("yyyy-mm-dd") %> */',
      path: {
        src: 'src',
        dist: 'build',
        temp: 'temp'
      }
    },
    init: true,
    loadGruntTasks: {
      pattern: ['grunt-!(cli)*']
    }
  };

  require('load-grunt-config')(grunt, options);
};
