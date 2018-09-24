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

var fetch = require('../src/fetchjson')

// Replace method in fetch module with our own stub
const stubFetchJSON = sandbox.stub().returns({ quote : { latestPrice : 1.00 }})
sandbox.replace(fetch, 'fetchJSON', stubFetchJSON)

// StockService will now internally use stubFetchJSON rather than fetchJSON
var StockService = require('../src/stocks')

describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {
    
    it("should throw an exception when no argument passed", async function() {
       
      await assert.eventually.equal(StockService.getStockLatestPrice('fb'), 1.00)
    });
  });
});

/*

fakeFetchJSON.withArgs()

args => {
  if(args.indexOf('tsla') === -1) {
    return { quote : { latestPrice : 9.00 }}
  }
  else {
    return { quote : { latestPrice : 5.00 }}
  }
})
*/

/*


describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {
    
    it("should throw an exception when no argument passed", async function() {
       
      await assert.eventually.equal(StockService.getStockLatestPriceDifferences('fb', 'tsla'), 4.00)
      
      // fakes allow us to query how it has been used
      assert.isTrue(fakeFetchJSON.callCount, 2)

      fakeFetchJSON.withArgs(sinon.match.string)
      // fakes allow us to query how it has been used
      assert.isTrue(fakeFetchJSON.callCount, 2)
    });
  });
});
*/