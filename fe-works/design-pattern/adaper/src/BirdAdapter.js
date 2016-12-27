import Robot from './Robot'
import Bird from './Bird'

class BirdAdapter extends Robot {
  constructor (origin) {
    super()
    if (origin) {
      this.bird = origin
    } else {
      this.bird = new Bird()
    }
  }

  cry () {
    this.bird.warble()
  }

  move () {
    this.bird.fly()
  }
}

export default BirdAdapter
