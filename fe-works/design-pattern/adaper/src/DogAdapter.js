import Robot from './Robot'
import Dog from './Dog'

class DogAdapter extends Robot {
  constructor (origin) {
    super()
    if (origin) {
      this.dog = origin
    } else {
      this.dog = new Dog()
    }
  }

  cry () {
    this.dog.bark()
  }

  move () {
    this.dog.run()
  }
}

export default DogAdapter
