/*
  Test async methods
*/

var chai = require("chai");
var assert = chai.assert;

// Pull in module containing logic we'd like to test
var StockService = require('../src/stocks')

describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {

    // Using promises and done() callback
    it("should return a number", function(done) {
      
      StockService.getStockLatestPrice('fb').then(price => {
        
        assert.isNumber(price);
        done();
      })
    });
    
    // Using async/await
    it("should return a number", async function() {
      
      const price = await StockService.getStockLatestPrice('fb')
      
      assert.isNumber(price);
    });
  });
});