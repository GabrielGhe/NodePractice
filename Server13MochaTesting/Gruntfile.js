module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        }
    });

    // now "grunt taskname" will run concat, uglify, some-other-task in that order
    grunt.registerTask('default', ['mochaTest']);
};