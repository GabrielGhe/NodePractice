module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      concat: {
          dist: {
              src: ['public/javascripts/*.js'],
              dest: 'public/javascripts/built.js',
          },
      },// End concat


      clean: {
          build: {
              src: [
                "public/javascripts/built.js",
                "public/javascripts/built.min.js",
                "public/stylesheets/style.min.css"
              ]
          }
      },// End clean


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
      },// End uglify

      cssmin: {
          options: {
            files: [{
                expand: true,
                cwd: 'public/stylesheets/',
                src: ['style.css'],
                dest: 'public/stylesheets/',
                ext: '.min.css'
            }]
          }
      }// End cssmin

  });// End initConfig

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
};