var value = require('./value.js') // <- this is the file you make;

var scalar = 'foo';
var fn = function() { return 'bar'; };
var fnTwice = function() {
  return fn;
};
var fnThrice = function() {
  return fnTwice;
};

var whoa = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return 'hi';
                };
              };
            };
          };
        };
      };
    };
  };
};

value(scalar);   // should be      'foo'
value(fn);       // should be      'bar'
value(fnTwice);  // should also be 'bar'
value(fnThrice); // should also be 'bar'

value(whoa);     // should be      'hi'