module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      core: {
        options: {
          mangle: false
        },
        files: [{
          expand: true,
          src: [
            'src/main/resources/public/js/**/*.js'
          ],
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
