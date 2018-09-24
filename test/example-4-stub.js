/*
Mock internal functions
*/

var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var assert = chai.assert;

// bring in sinon for function mocking
var sinon = require("sinon");

// bring in proxyquire to intercept module dependencies
var proxyquire = require('proxyquire');

var fetch = require('../src/fetch')

var StockService
var stubFetchStock

describe("StockService", function() {

  beforeEach(function () {

    stubFetchStock = sinon.stub(fetch, 'fetchStock')

    StockService = proxyquire('../src/stocks', { './fetch' : fetch })
  });

  afterEach(function () {
    
    stubFetchStock.restore()
  });

  describe("#getStockLatestPrice()", function() {
    
    it("should return 1.00 for fb", async function() {
      
      // our fetchStock stub will behave like so .. return this data when called internally by StockService
      stubFetchStock.returns({ quote : { latestPrice : 1.00 }})
       
      await assert.eventually.equal(StockService.getStockLatestPrice('fb'), 1.00)
    });

    it("should return 14.00 stock price for google", async function() {
    
      // Use with args to control behavior of stub when called with specific arguments
      stubFetchStock.withArgs('google').returns({quote : { latestPrice : 14.00 }})   

      await assert.eventually.equal(StockService.getStockLatestPrice('google'), 14.00)
    });
  });

  describe("#getStockLatestPriceDifferences()", async function() {

    it("should return the difference between stock prices of two companies", async function() {

      stubFetchStock.withArgs('google').returns({quote : { latestPrice : 2.00 }})   
      stubFetchStock.withArgs('microsoft').returns({quote : { latestPrice : 10.00 }})
      
      await assert.eventually.equal(StockService.getStockLatestPriceDifferences('microsoft', 'google'), 8.00)
    })
  })
});