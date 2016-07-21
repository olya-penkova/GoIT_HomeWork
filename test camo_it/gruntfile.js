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
   },
  uglify: {
  dist: {
    src: ['js/src/script.js'],
    dest: 'js/dist/script.min.js'
  }
  },
  cssmin: {
    target: {
    files: [{
     expand: true,
     cwd: 'css',
     src: ['src/style.css'],
     dest: 'css/dist',
     ext: '.min.css'
  }]
}
}
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'watch', 'uglify', 'cssmin']);

};