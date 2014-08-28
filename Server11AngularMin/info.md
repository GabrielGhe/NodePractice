NodeJS with Angular Minification
============

<p>
  Angularjs is a great framework. The problem is that minification is a bit more complicated because of angular's dependency injection. This project shows how you can minify an angular app.
</p>

<h4>Installation</h4>

<p>Step 1</p>
```shell
### Command Line ###

# Get the dependencies
npm install -g grunt-cli

npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-clean
npm install --save-dev grunt-contrib-uglify
```

<p>Step 2</p>
```javascript
// ### in public/javascripts/index.js ###

// Make sure that your angular syntax is like this
MyApp.controller("ThingController", ["$scope",
    function($scope){
        $scope.something = "Minification of angular apps works!";
    }
]);
```

<p>Step 3</p>
```javascript
// ### in Gruntfile.js ###
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
```

<p>Step 4</p>
```shell
### Command Line ###
$ grunt
```
