module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
  js: {
    // the files to concatenate
    src: ['js/src/*.js'],
    // the location of the resulting JS file
    dest: 'js/dist/script.min.js',
    options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  }
  },
  	css: {
  	src: ['css/src/*.css'],
  	dest: 'css/dist/style.min.css',
  	options: {
                separator: '\n\r'
                }
  }
},
uglify: {
  dist: {
    src: ['js/dist/script.min.js'],
    dest: 'js/dist/script.min.js'
  }
  },
  cssmin: {
  	target: {
  	files: [{
     expand: true,
     cwd: 'css',
  	 src: ['dist/style.min.css'],
  	 dest: 'css',
  	 ext: '.min.css'
  }]
}
}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};