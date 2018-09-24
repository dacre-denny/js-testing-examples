/*
Mock internal functions
*/

var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
var proxyquire = require('proxyquire');
var sinon = require("sinon");
chai.use(chaiAsPromised);

var assert = chai.assert;

// bring in our fetch module as usual
var fetch = require('../src/fetch')
var StockService

describe("StockService", function() {

  beforeEach(function () {

    sinon.spy(fetch, 'fetchStock')
    StockService = proxyquire('../src/stocks', { './fetch' : fetch })
  });

  afterEach(function () {
      
    fetch.fetchStock.restore()
  });

  describe("#getStockLatestPrice()", function() {
    
    this.timeout(15000)

    it("should throw an exception when no argument passed", async function() {
       
      await assert.eventually.isDefined(StockService.getStockLatestPriceDifferences('fb', 'tsla'))
      
      // spys allow us to query how it has been used
      assert.equal(fetch.fetchStock.callCount, 2)
      
      // spys allow us to check that the method was called as expected
      assert.isTrue(fetch.fetchStock.calledWith(sinon.match.string))
    });
  });
});