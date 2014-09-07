"use strict";

var cheerio = require("cheerio")
  , request = require("request")
  , fs = require("fs");
  , _ = require("underscore");

exports.index = function(req, res){
  // http://fcms.concordia.ca/fcms/asc002_stud_all.aspx
  // http://www.concordia.ca/encs/students/course-schedules/fall-2014-2015.html
  
  var url = "http://www.concordia.ca/encs/students/course-schedules/fall-2014-2015.html";

  request(url, function(e, response, html) {
    var $ = cheerio.load(html);
    var tbody = $('#CSE').next().find("tbody");
    var rows = tbody.find("tr");

    _.each(rows, function(row) {
      var nameAnchor = row.find("th").find("a");
      var link = nameAnchor.href;
      var name = nameAnchor.text();

      console.log(name + " " + link);
    });
  });
};