
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.good = function(req, res){
  res.render('good', { title: 'Express' });
};

exports.bad = function(req, res){
  res.render('bad', { title: 'Express' });
};