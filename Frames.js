// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Protractor 101 tests",function(){
	//Opens the Angular JS Website
	it("Open Non-Angular JS Website Alerts",function(){
		
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		
		browser.get("http://qaclickacademy.com/practice.php");
		
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text) {
			console.log(text);
		})
		
	})
	
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})