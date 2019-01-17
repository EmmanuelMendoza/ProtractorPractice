// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Actions demo",function(){
	//Opens the Angular JS Website
	it("Open Posse website",function(){
		
		browser.get("http://posse.com");
		
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
			browser.sleep(3000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function() {
				
				browser.sleep(2000);
			})
		})
		
		
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})