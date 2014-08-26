NodeJS with Bower
============

<p>
  NodeJS has the amazing npm, which is one of my favorite package managers. It handles all your modules
  neatly inside the package.json file. This is great for the server side, but what about the client side?
  
  That's where bower comes in handy. BowerJS manages your client side dependencies. Everything from jQuery, AngularJS and bootstrap can all be easily installed with bower.
</p>


```javascript
// once you install npm ... first, in your command line
$ npm install -g bower
$ touch .bowerrc
$ touch bower.json


// in .bowerrc
{
  //where do you want the bower components to be stored
  "directory" : "public/bower_components"
}


// in bower.json
{
  "name": "Server8",
  "version": "0.0.1",
  "dependencies": {
  }
}

```

<p>
  After that, you can simply add components by doing the following in your command line.
</p>

```javascript
bower install jquery
```
