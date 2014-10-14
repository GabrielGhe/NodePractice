NodeJS with ReactJS
============

<p>
  I've heard some nice things about Facebook's ReactJS Framework. So here's how to setup React with Node.
</p>

```shell
### in shell ###

# look at my bower tutorial on how to setup bower
$ npm install --save bower

$ npm install --save express-jsx
$ bower install --save react
```

<p>
  React's syntax is really verbose, so they use <a 
  href="http://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a>. Manually compiling jsx is a pain so we're 
  going to use express-jsx which compiles the jsx in real time. Lets start.
</p>

```javascript
// ### in app.js ###

// add near the top
var jsxCompile = require('express-jsx');

// order is important
app.use(jsxCompile(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
```

<p>
  Now we're going to modify the ejs file and make it use react.
</p>

```html
<!-- ### in index.ejs ### -->

<div id="test"></div>

<script type="text/javascript" src="bower_components/react/react.min.js"></script>
<script src="javascripts/test.js"></script>
```

<p>
  Remember that when test.js is requested, express-jsx middleware will look for a matching .jsx file. This means we need a test.jsx file.
</p>

```javascript
// ### in test.jsx ###

/** @jsx React.DOM */
"use strict"

React.renderComponent(
  <h1>I am printing the title from react, works!</h1>,
  document.getElementById('test')
);
```

