var testModel = require('../model/testModel');

/*
 * GET home page.
 */

exports.index = function(req, res){
    testModel.customFunctionName();
    res.render('index', { title: 'Express' });
};