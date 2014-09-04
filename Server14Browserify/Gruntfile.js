"use strict";

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({

        // Add the lib to the main file
        concat: {
            dist: {
                src: ['public/javascripts/lib.js', 'public/javascripts/build.js'],
                dest: 'public/javascripts/dist.js'
            }
        },

        // will clean
        clean: {
            build: {
                src: ['public/javascripts/build.js', 'public/javascripts/lib.js']
            }
        },

        // will browserify all the js files
        browserify: {
            client: {
                src: ['public/javascripts/**/*.js'],
                dest: 'public/javascripts/build.js'
            }
        },

        // will browserify bower libs
        browserifyBower: {
            options: {
                file: 'public/javascripts/lib.js'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'browserifyBower', 'browserify:client', 'concat']);
};