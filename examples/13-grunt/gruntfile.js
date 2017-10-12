module.exports = function( grunt ){
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.initConfig({
    jshint: {
      all: ['src/*.js']
    }
  });
  grunt.registerTask( 'default', [ 'jshint' ]);
}
