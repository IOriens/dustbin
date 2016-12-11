var flatten = require('./flatten.js') // <- this is the file you make;

var arr = [1, [2], [3, 4, [5]]];

flatten(arr); 
// => [1, 2, 3, 4, 5];