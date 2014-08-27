module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      concat: {
          dist: {
              src: ['public/javascripts/*.js'],
              dest: 'public/javascripts/built.js',
          },
      },//End concat


      clean: {
          build: {
              src: ["public/javascripts/built.js", "public/javascripts/built.min.js"]
          }
      },//End clean


      uglify: {
          options: {
              mangle: {
                  toplevel: true
              },
              compress: true
          },
          my_target: {
              files: {
                  'public/javascripts/built.min.js': ["public/javascripts/built.js"]
              }
          }
      }//End uglify

  });//End initConfig

  grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};