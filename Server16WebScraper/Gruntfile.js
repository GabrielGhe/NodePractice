"use strict";

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    mochaWebdriver: {
      options: {
        timeout: 1000 * 60 * 3,
        reporter: 'spec'
      },
      chrome: {
        src: ['scrape/index.js'],
        options: {
          testName: 'scrapping',
          hostname: '127.0.0.1',
          port:   '4444',
          usePromises: true,
          autoInstall: true,
          browsers: [
            {browserName: 'chrome'}
          ]
        }
      }
    }// end mochaWebdriver
  });

  grunt.registerTask('default', ["mochaWebdriver:chrome"]);
};