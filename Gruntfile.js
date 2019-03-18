module.exports = function(grunt){
  grunt.initConfig({
  mochacli:{
    options: {
        reporter: 'nyan',
        bail: true
        
    },
      all: ['test/*.js']
}
});
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-run')

  grunt.registerTask('default',['run','mochacli','stop']);
}
