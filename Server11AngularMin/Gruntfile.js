"use strict";

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            build: {
                src: ["public/javascripts/index.min.js"]
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
                    'public/javascripts/index.min.js': ["public/javascripts/index.js"]
                }
            }
        },// End uglify
    });

    grunt.registerTask("default", ["clean", "uglify"]);
};