module.exports = {
  options: {
    configFile: 'grunt/conf/sasslint.yml'
  },
  target: [
    '<%= path.src %>/sass/{,**/}*.scss'
  ]
};
