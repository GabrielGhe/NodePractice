NodeJS authentication with PassportJS
============

<p>If you ever wondered how people use the <b>Sign in with Google</b> way of logging in, here's how.

<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install --save passport
npm install --save passport-google
```

<p>Step 2</p>
```javascript
// ### in app.js ###

// At the top
var passport = require('passport');

// Add middleware
app.use(passport.initialize());
app.use(app.router);  // has to be before this line
```

<p>Step 4</p>
```javascript
// ### in app.js ###

// at the bottom
require('./config/passport-config');

app.get('/auth/google', passport.authenticate('google', {
  scope: ['email']
}));

app.get('/auth/google/return', passport.authenticate('google', {
  successRedirect: "/good",
  failureRedirect: "/bad"
}));

```
