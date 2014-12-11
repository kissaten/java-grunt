module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      core: {
        files: [{
          expand: true,
          cwd: 'src/main/resources',
          src: 'public/js/**/*.js',
          dest: "target/classes",
          ext: '.min.js'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
