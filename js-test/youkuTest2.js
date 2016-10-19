var a = function () {
  this.b = 1
}

var b = function() {
  var b = new a().b;
  console.log(b)
  return 5 + b;
}

var c = b();
console.log(b)
console.log(c)
