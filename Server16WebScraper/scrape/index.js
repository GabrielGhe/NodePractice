"use strict";

var browser
  , wd;

describe("Scraping", function() {
  
  // Getting the globals
  before(function(done) {
    browser = this.browser;
    wd = this.wd;
  });

  it("should just go to the url and wait", function() {
    browser.get("http://www.concordia.ca/encs/students/course-schedules/fall-2014-2015.html");
  });
});