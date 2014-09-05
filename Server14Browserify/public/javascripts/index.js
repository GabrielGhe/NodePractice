"use strict";

var unique = require('uniq');               // node module
var $ = require('jquery');                  // bower module
var sayMyName = require('./sayMyName');     // own module

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log("'Uniq' node module", unique(data));
console.log("'jQuery' bower module", $('body').html());
console.log("'sayMyName', own module", sayMyName());