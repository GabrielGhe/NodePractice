NodeJS with Mongoose
============

<p>
  One of the most popular NoSQL databases is MongoDB. It's great to use with node for any project and npm has a great module called mongoose to make things even easier.
</p>

<h3>Installation</h3>

<p>Step 1</p>
```shell
### in the command line ###

# install mongodb using homebrew
brew install mongodb

# start up mongodb
mongod

# query mongodb
mongo

# install mongoose
npm install mongoose
```

<p>Step 2</p>
```javascript
// ### in app.js ###
...

// Mongoose connecting
//---------------------------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');// "test" is the db name
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});

// add ^ before this line
var app = express();

...

```

<p>Step 3</p>
```javascript
// ### in model/testModel.js ###

var mongoose = require('mongoose');

var testModelSchema = mongoose.Schema({
    // look at mongoose/mongo api to know what's allowed
    name: String,
});

//add custom methods to the model if you want
testModelSchema.statics.customFunctionName = function(){
}

// Create the model and assign it to exports
module.exports = mongoose.model('testModel', testModelSchema, 'testModel');
```

<p>Step 4</p>
```javascript
// Now you can require the model
var testModel = require("./model/testModel");

// and use mongoose functions on it
testModel.find({}, function(err, testModels){
    console.log("Found this many", testModels.length);
});

// or custom functions
testModelSchema.customFunctionName();
```
