// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Window handles demo",function(){
	//Opens the Angular JS Website
	it("Open WindowHandle website",function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("c:/autodemo.html");
		
		browser.getTitle().then(function(title) {
			console.log(title + " -title before switch");
		})
		
		element(by.linkText("Google")).click().then(function() {
			
			browser.getAllWindowHandles().then(function(handles) {
				browser.switchTo().window(handles[1]).then(function() {
					browser.getTitle().then(function(title) {
						console.log(title + " -title after switch");
					})
					browser.sleep(2000);
				})
				
				browser.switchTo().window(handles[0]).then(function() {
					browser.getTitle().then(function(title) {
						console.log(title + " -switch back to first page");
					})
					browser.sleep(2000);
				})
			})
		})
		
		
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})