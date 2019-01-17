// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Protractor Elements demo",function(){
	//Opens the Angular JS Website
	it("Locators test case",function(){
		browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");

		element(by.id("gobutton")).click();
		
		
		// Jasmine takes care of promise resolve //expect is a method to verify assertions in Jasmine
		expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("8");
		
		// Print the text until the promise is resolved
		// function() has an argument 'text' to receive the result of the resolved promise from the selected element
		element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
			console.log(text);
		})
		
		browser.waitForAngularEnabled(false);
		browser.get("http://www.google.com"); //non angular site
		
	})
	
	//Close the browser
	/*it("Close the browser",function(){
		browser.quit();
	})*/
})