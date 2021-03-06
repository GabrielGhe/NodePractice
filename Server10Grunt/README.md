NodeJS with Grunt
============

<p>
  <a href="http://gruntjs.com/">Grunt</a> is amazing! It automates tasks for you in the most amazing way.
  It allows you to run tests, minify css/js files, combine js files and much much more.
</p>

<p>
  In this project, I used 2 js files <a href="https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/index.js">index.js</a> and <a href="https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/index2.js">index2.js</a> . I concatinated them and saved the result to <a href="https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/built.js">built.js</a> and then I uglified that file and saved the result to <a href="https://github.com/GabrielGhe/NodePractice/blob/master/Server10Grunt/public/javascripts/built.min.js">built.min.js</a>
  I also minimized the css using cssmin.
</p>

<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install -g grunt-cli

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-uglify
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-contrib-concat
npm install --save-dev grunt-contrib-cssmin
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
    // ########## your tasks go here ##############
  });
  
  // now "grunt taskname" will run concat, uglify, some-other-task in that order
  grunt.registerTask('taskname', ['concat', 'uglify', 'some-other-task']);
};
```

<p>Step 4</p>
```javascript
// ### in Gruntfile.js ###

// The initConfig would look something like this
grunt.initConfig({
  concat: {
      dist: {
          src: ['public/javascripts/*.js'],
          dest: 'public/javascripts/built.js',
      },
  },// End concat
  clean: {
      build: {
          src: ["public/javascripts/built.js", "public/javascripts/built.min.js"]
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
});
```
