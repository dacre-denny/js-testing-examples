# js-testing-examples

Demonstrates the following testing concepts:

- [Simple BDD styled testing](/test/example-1-simple.js)
- [Testing asynchronous/promise-based methods](/test/example-2-async.js)
- [Testing asynchronous error assertions](/test/example-3-async-errors.js)
- [Method stubbing and module proxies](/test/example-4-stub.js)
- [Method spies](/test/example-5-spy.js)
- [Testing correct UI/Component rendering](/test/example-6-component.js)
- [Testing correct UI/Component behavior](/test/example-7-component.js)

### Installation

```
npm install
```

### Usage

Run each test suite individually
```
npm run test test/example-1-simple.js 
npm run test test/example-2-async.js 
npm run test test/example-3-async-errors.js 
npm run test test/example-4-stub.js 
npm run test test/example-5-spy.js 
```

Run component rendering tests
```
npm run testcomponents
```