NodeJS testing with Mocha
============

<p>
  On the client side, you have Karma for unit testing. On the server side, there's Mocha. This example project will
  demonstrate how to use mocha efficiently.
</p>

<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install -g grunt-cli

# Grunt modules
npm install --save-dev grunt
npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-mocha-test

# Testing modules
npm install --save-dev chai
npm install --save-dev chai-as-promised
npm install --save-dev mocha
npm install --save-dev supertest-as-promised
```

<p>Step 2</p>
```shell
### Command Line ###

# Create a Gruntfile.js
touch Gruntfile.js
```

<p>Step 3</p>
```javascript
// ### in Gruntfile.js ###

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
  
  // now "grunt" will run our tests
  grunt.registerTask('default', ['mochaTest']);
};
```
