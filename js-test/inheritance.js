function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function(){
  console.log(this.name)
}

function Runner(name,speed) {
  Person.call(this, name)
  this.speed = speed
}

Runner.prototype = new Person()
Runner.prototype.getSpeed = function () {
  console.log(this.speed)
}

var mike = new Person('mike')
mike.sayHello()
var runnerAmy = new Runner('amy',333)
runnerAmy.sayHello()
runnerAmy.getSpeed()
console.log(Runner.prototype.constructor)
