// First parameter is Test Suite name
// Second parameter is the function that will have all tests (it blocks)
describe("Shopping Tests on ProtoCommerce website", function(){
	
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
	
	it("Clicks on the Shop link to navigate to the Shop page", function() {
		element(by.linkText("Shop")).click();
	})
	
	it("Shop items test", function() {
		
		addItemToCart("Samsung Note 8");
		addItemToCart("iphone X");
		
		element(by.partialLinkText("Checkout")).getText().then(function (text) {
			
			var res = text.split("(");
			var itemsInCart = res[1].trim().charAt(0);
			
			var y = Number(itemsInCart) + 1;
			expect(itemsInCart).toBe("2");
			console.log("\ny variable: " + y);
			console.log("\nItems in cart: " + itemsInCart);
		})
		
	})
	
	it("Verify that sum of all item prices in cart matches the total amount for checkout", function() {
		
		element.all(by.css(".row tr")).each(function(row) {
			console.log("inside each");
			row.element(by.tagName("td")).getText().then(function (text){
				console.log("inside item");
			})
		})
		
	})
	
	//Close the browser
	it("Close the browser",function(){
		browser.quit();
	})
})