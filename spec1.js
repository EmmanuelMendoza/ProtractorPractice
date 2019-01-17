// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Protractor 101 tests",function(){
	//Opens the Angular JS Website
	it("Open Angular JS Website",function(){
		
		browser.get("https://angularjs.org");

		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
			console.log("Last step to execute.");
		})
		
		
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})