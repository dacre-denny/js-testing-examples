require('babel-register')();

var { JSDOM } = require('jsdom');
var dom = new JSDOM('')

//var exposedProperties = ['window', 'navigator', 'document'];

global.document = dom.window.document;
global.window = dom.window;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;