"use strict";

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        // will clean
        clean: {
            build: {
                src: ['public/javascripts/build.js']
            }
        },

        // will browserify all the js files
        browserify: {
            client: {
                src: ['public/javascripts/**/*.js'],
                dest: 'public/javascripts/build.js'
            }
        }

        // will browserify bower libs
        
    });

    grunt.registerTask('default', ['clean', 'browserify:client']);
};