exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ShoppingCart.js'],
  
  capabilities: {
	  'browserName': 'chrome'
  }


};