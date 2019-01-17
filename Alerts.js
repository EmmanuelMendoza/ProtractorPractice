// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Protractor 101 tests",function(){
	//Opens the Angular JS Website
	it("Open Non-Angular JS Website Alerts",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");

		element(by.id("confirmbtn")).click().then(function() {
			browser.sleep(1000);
		});
		browser.switchTo().alert().accept().then(function() {
			browser.sleep(1000);
		})
		
		
	})
	
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})