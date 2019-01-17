// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("All Element demo",function(){
	
	// adds two numbers
	function calc(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function (values) {
				if(values==c){
					item.click();
				}
			})
		})
		
		element(by.id("gobutton")).click();
		
	}
	
	//Opens the Angular JS Website
	it("Locators test case",function(){
		browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
		
		calc(3, 5, "MULTIPLICATION");
		calc(3, 5, "DIVISION");
		calc(3, 5, "ADDITION");
		calc(3, 5, "SUBTRACTION");
		calc(3, 5, "MODULO");
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
				console.log(text);
			})
		})
		
	})
	
})