"use strict";

var setSemesterFall = "document.getElementById(\"ctl00_PageBody_ddlSess\").value = \"2\"";
var setEng = "document.getElementById(\"ctl00_PageBody_ddlDept\").value = \"04\"";

describe("Scraping", function() {

  it("should just go to the url and wait", function(done) {
    // WD api
    // https://github.com/admc/wd/blob/097719ac424a83d0a63b419691624997746f814a/doc/api.md

    this.browser
      .get("http://fcms.concordia.ca/fcms/asc002_stud_all.aspx")
      .waitForElementByCss("#ctl00_PageBody_ddlSess", this.wd.asserters.isDisplayed)
      .execute(setSemesterFall)
      .execute(setEng)
      .sleep(4000)
      .done(done);
  });
});