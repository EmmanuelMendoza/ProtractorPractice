// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("User Tests on ProtoCommerce website", function(){
	
	function addItemToCart(product){
	
		//Take all 4 item cards inot a list
		//Go through each index in the list and get the title of the card, if the title matches, then click on the Add button.
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function (text){
				if(text==product){
					item.element(by.css("button[class='btn btn-info']")).click();
				}
			})
		})
		
	}
	
	
	//Opens the Angular JS Website
	it("Opens the protocommerce Website and sets up the browser", function(){
		
		browser.driver.manage().window().maximize();
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
	})
	
	it("Registers a valid user", function() {
		element(by.name("name")).sendKeys("Achis achis");
		element(by.css("input[name='email']")).sendKeys("losmariachis@email.com");
		element(by.id("exampleInputPassword1")).sendKeys("P@ssw0rd");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function() {
			
			element(by.css("div[class*='success']")).getText().then(function(text) {
				console.log(text);
			})
			
			browser.sleep(1500);
		})
	})
	
	it("Validates error message when entering 1 character on the name field", function() {
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("A").then(function() {
			element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
			})
		browser.sleep(1500);
		})
	})
	
	it("Validates error message when leaving the name field blank", function() {
		element(by.name("name")).clear().then(function() {
			element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
			})
			browser.sleep(1500);
		})
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})