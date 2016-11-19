function A() {
  this.do = function () {
    return 'foo'
  }
}
A.prototype = function() {
  this.do = function () {
    return 'bar'
  }
}
var x = new A().do()
console.log(x)
