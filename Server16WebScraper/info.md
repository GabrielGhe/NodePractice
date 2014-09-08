NodeJS Crawling
============

<p>Initially I wanted to scrape a school site for class schedules
using the node modules cheerio and request. It turns out that the site I wanted to scrape
uses an iframe for the data... and request doesn't like those. So I
decided to switch to selenium and grunt-mocha-webdriver.
</p>

<h3>Installation</h3>
<p>Step 1</p>
```shell
### Command Line ###

# Get the right packages
npm install --save-dev grunt
npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-mocha-webdriver
```

<p>Step 2</p>
```javascript
// ### in Gruntfile.js ###

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    mochaWebdriver: {
      options: {
        timeout: 1000 * 60 * 3,
        reporter: 'spec'
      },
      chrome: {
        src: ['scrape/index.js'],
        options: {
          testName: 'scrapping',
          hostname: 'localhost',
          port:   '4444',
          usePromises: true,
          autoInstall: true,
          browsers: [
            {browserName: 'chrome'}
          ]
        }
      }
    }// end mochaWebdriver
  });

  grunt.registerTask('default', ["mochaWebdriver:chrome"]);
};
```

<p>Step 3</p>
```javascript
// ### in scrape/index.js ###

// declare a simple mocha test
describe("Scraping", function() {
  it("should just go to the url and wait", function() {
    // instructions go here
  });
});
```

<p>Step 4</p>
```javascript
// ### in scrape/index.js ###

var jsCode = "console.log('this will execute in the browser')";
var page = {
  url: "url",
  body: "#body-id",
  submit: "#submit-btn-id"
};

it("should just go to the url", function() {
  this.browser
      .get(page.url)
      .waitForElementByCss(page.body, this.wd.asserters.isDisplayed)
      .execute(jsCode)
      .elementByCss(page.submit)
      .click()
      .sleep(4000);
});
```
