"use strict";

var unique = require('uniq');
var $ = require("jquery");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log($("body").html());
console.log(unique(data));