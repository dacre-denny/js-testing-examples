/*
  Test async methods
*/

var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var assert = chai.assert;

// Pull in module containing logic we'd like to test
var StockService = require('../src/stocks')

describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {

    // useful if tests takes longer to complete
    this.timeout(15000)

    // Using promises and done() callback
    it("should return a number when passed fb (promise)", function(done) {
      
      StockService.getStockLatestPrice('fb').then(price => {
        
        assert.isNumber(price);
        done();
      })
    });
    
    // Using async/await
    it("should return a number when passed fb (async)", async function() {
      
      const price = await StockService.getStockLatestPrice('fb')
      
      assert.isNumber(price);
    });

    it("should return a number for fb", async function() {
      
      await assert.eventually.isNumber(StockService.getStockLatestPrice('fb'))
    });
  });
});