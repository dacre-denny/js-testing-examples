/*
  Test methods
*/

var chai = require("chai");
var assert = chai.assert;

// Describe the module we're testing
describe("Date", function() {

  // Describe the module's method that we're testing
  describe("#now()", function() {
    
    it("should always return defined value", function() {
      assert.isDefined(Date.now());
    });

    it("should always return a number", function() {
      assert.isNumber(Date.now());
    });
  });

  describe('#parse()', function() {

    it('should return number of milliseconds since epoch time', function() {

      assert.isNumber(Date.parse('1/1/2000 13:00:00'))
      assert.equal(Date.parse('1/1/2000 13:00:00'), 946684800000)
    });
  });
});

/*
    // called before all tests in #now() block
    before(function() {
      console.log('#now() block starting')
    })

    // called after all tests in #now() block
    after(function() {
      console.log('#now() block done')
    })

    // called after all tests in #now() block
    beforeEach(function() {
      console.log('Before test done')
    })

    // called after each test in #now() block
    afterEach(function() {
      console.log('After test')
    })
*/