var pkg = require('../package.json');
var pkgName = pkg.name;
var pkgVersion = pkg.version;

module.exports = {
  options: {
    data: {
      name: pkgName,
      version: pkgVersion,
      buildDate: new Date()
    }
  },
  main: {
    src: 'grunt/conf/version.hbs',
    dest: 'build/version.txt'
  }
};
