"use strict";

var mongoose = require('mongoose');

var testModelSchema = mongoose.Schema({
    name: String,
    customProperty: {
        something: Number
    }
});

testModelSchema.statics.customFunctionName = function(){
    var entry = new this({
        name: "Blah",
        customProperty: {
            something: 4
        }
    });

    entry.save();
}

// name to use, schema
module.exports = mongoose.model('testModel', testModelSchema, 'testModel');