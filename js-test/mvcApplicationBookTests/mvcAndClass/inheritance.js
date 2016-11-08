var Animal = function () {};

Animal.prototype.breath = function () {
  console.log('breath')
}

var Dog = function () {};

Dog.prototype = new Animal;

Dog.prototype.weg = function () {
  console.log('weg tail')
};

var dog = new Dog();
dog.weg();
dog.breath();

console.log(dog.__proto__);
console.log(Dog.__proto__);
console.log(dog.prototype);
console.log(Dog.prototype);
console.log(Dog.prototype.constructor);
console.log(typeof dog)
