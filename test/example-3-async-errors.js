/*
Test failure behaviour
*/

var chai = require("chai");

// for async helpers in chai, use chai-as-promised
var chaiAsPromised = require('chai-as-promised');

// add the chai-as-promised middleware to chai
chai.use(chaiAsPromised);

// now access the assertion interface
var assert = chai.assert;

var StockService = require('../src/stocks')

describe("StockService", function() {
  describe("#getStockLatestPrice()", function() {
    
    it("should throw an exception when no argument passed", async function() {
      
      // use isRejected, part of chai-as-promised
      await assert.isRejected(StockService.getStockLatestPrice())
    });
  });
});