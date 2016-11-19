var Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log(`Hi, my name is ${this.name}`)
}

Person.shoutName = function () {
  console.log(`shouting ${this.name}!`)
}

var mike = new Person('mike')
mike.sayName()
Person.shoutName()
console.log(mike.__proto__)
console.log(Person.prototype)

