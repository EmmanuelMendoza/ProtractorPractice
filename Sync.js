// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Protractor 101 tests",function(){
	//Opens the Angular JS Website
	it("Open Non-Angular JS Website Sync",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("http://nettuts.s3.amazonaws.com/011_jQuerySite/sample/index.html");
		
		element(by.css("a[href*='about.html']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("load"))),8000);
		
		element(by.xpath("//*[@id='content']/h2")).getText().then(function(text) {
			console.log(text);
		})

		
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})