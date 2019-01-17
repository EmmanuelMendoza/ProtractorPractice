// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Chain locators demo",function(){
	//Opens the Angular JS Website
	it("Locators test case",function(){
		browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click(); //clicks on the dropdown element to change to multiplication

		element(by.id("gobutton")).click();
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
			console.log(text);
		})
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text){
			console.log(text);
		})
		
		
		
	})
	
	//Close the browser
	/*it("Close the browser",function(){
		browser.quit();
	})*/
})