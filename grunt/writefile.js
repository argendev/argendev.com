var pkg = require('../package.json');
var pkgName = pkg.name;
var pkgVersion = pkg.version;

module.exports = {
  options: {
    data: {
      name: pkgName,
      version: pkgVersion,
      date: new Date()
    }
  },
  index: {
    src: 'src/index.hbs',
    dest: 'build/index.html'
  },
  version: {
    src: 'grunt/conf/version.hbs',
    dest: 'build/version.txt'
  }
};
