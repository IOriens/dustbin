var debounce = require('./debounce.js') // <- this is the file you make;

var sayHi = function() {
  console.log('hi');
};

var debounced = debounce(sayHi, 1000);

debounced();

debounced();
debounced();
setTimeout(debounced, 500);
debounced();

// there should only be one 'hi' message on the console