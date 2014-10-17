"use strict";

var setSemesterFall = "document.getElementById(\"ctl00_PageBody_ddlSess\").value = \"2\"";
var setEng = "document.getElementById(\"ctl00_PageBody_ddlDept\").value = \"0405\"";

var page = {
  url: "http://fcms.concordia.ca/fcms/asc002_stud_all.aspx",
  body: "#ctl00_PageBody_ddlSess",
  submit: "#ctl00_PageBody_btn_ShowScCrs"
};

describe("Scraping", function() {

  it("should just go to the url and wait", function() {
    // WD api
    // https://github.com/admc/wd/blob/097719ac424a83d0a63b419691624997746f814a/doc/api.md

    this.browser
      .get(page.url)
      .waitForElementByCss(page.body, this.wd.asserters.isDisplayed)
      .execute(setSemesterFall)
      .execute(setEng)
      .elementByCss(page.submit)
      .click()
      .sleep(4000);
  });
});