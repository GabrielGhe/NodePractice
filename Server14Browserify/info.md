NodeJS with Browserify
============

<p>
  NodeJS has the most amazing package manager, npm that allows you to install modules easily. After installing a module, you can simply require it by doing require('moduleName'). Wouldn't it be great if you could do that on the client side too? Using browserify, you can.
</p>

<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install -g grunt-cli

npm install --save-dev bower
npm install --save-dev debowerify

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-browserify
```

<p>Step 2</p>
```shell
### Command Line ###

# Create a Gruntfile.js
touch Gruntfile.js
touch bower.json
touch .bowerrc
```

<p>Step 3</p>
```javascript
// ### in Gruntfile.js ###

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
  });

  grunt.registerTask('default', ['clean', 'browserify:client']);
};
```
