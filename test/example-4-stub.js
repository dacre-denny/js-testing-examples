/*
Mock internal functions
*/

var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var assert = chai.assert;

// bring in sinon for function mocking
var sinon = require("sinon");
var sandbox = sinon.createSandbox()

var fetch = require('../src/fetch')

// Replace method in fetch module with our own stub
const stubFetchStock = sandbox.stub().returns({ quote : { latestPrice : 1.00 }})

sandbox.replace(fetch, 'fetchStock', stubFetchStock)

// StockService will now internally use stubFetchJSON rather than fetchJSON
var StockService = require('../src/stocks')

describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {
    
    it("should return 1.00 for fb", async function() {
       
      await assert.eventually.equal(StockService.getStockLatestPrice('fb'), 1.00)
    });

    it("should return 14.00 for google", async function() {

      // Use with args to control behavior of stub when called with specific arguments
      stubFetchStock.withArgs('google').returns({quote : { latestPrice : 14.00 }})    

      await assert.eventually.equal(StockService.getStockLatestPrice('google'), 14.00)
    });

    it("should return 8.00 for microsoft", async function() {
      
      stubFetchStock.withArgs('microsoft').returns({quote : { latestPrice : 8.00 }})

      await assert.eventually.equal(StockService.getStockLatestPrice('microsoft'), 8.00)
    });
  });

  describe("#getStockLatestPriceDifferences()", async function() {

    stubFetchStock.withArgs('google').returns({quote : { latestPrice : 2.00 }})   
    stubFetchStock.withArgs('microsoft').returns({quote : { latestPrice : 10.00 }})

    await assert.eventually.equal(StockService.getStockLatestPriceDifferences('microsoft', 'google'), 8.00)
  })
});