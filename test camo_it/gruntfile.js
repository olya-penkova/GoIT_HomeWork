module.exports = function(grunt) {

  grunt.initConfig({
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['src/*.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      files: ['css/src/*.scss'],
      tasks: ['sass'],
    }
   } 
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};