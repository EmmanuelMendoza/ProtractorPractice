// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("All Element demo",function(){
	
	// adds two numbers
	function add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		element(by.id("gobutton")).click();
	}
	
	//Opens the Angular JS Website
	it("Locators test case",function(){
		browser.get('http://juliemr.github.io/protractor-demo/'); //angular site
		
		add(2,3);
		add(3,4);
		add(4,5);
		add(5,6);
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
				console.log(text);
			})
		})
		
	})
	
})