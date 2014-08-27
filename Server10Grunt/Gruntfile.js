module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        

        concat: {
            dist: {
                src: ['public/javascripts/*.js'],
                dest: 'public/javascripts/built.js',
            },
        },//End concat


    });//End initConfig
};