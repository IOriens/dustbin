function work(arg) {
  return Math.random() * arg;
}

function makeCaching(f) {
  var cache = {};

  var func = function (arg) {
    if(!(arg in cache)) {
      cache[arg] = f.call(this, arg);
    }
    return cache[arg];
  }

  func.flush = function () {
    cache = {};
  }

  return func;
}

work = makeCaching(work);

var a = work(1);
var b = work(1);
console.log('first',a == b);

work.flush();

b = work(1);
console.log('second', a == b);

