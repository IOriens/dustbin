import DogAdaper from './DogAdapter'
import BirdAdaper from './BirdAdapter'
import Robot from './Robot'

class BioRobot extends Robot {
  constructor (type, origin) {
    let result // Return undifned will create default class
    super()
    switch (type) {
      case 'Dog':
        result = new DogAdaper(origin)
        break
      case 'Bird':
        result = new BirdAdaper(origin)
        break
      default:
        result = undefined
    }
    return result
  }

  cry () {
    console.log('robot crying')
  }

  move () {
    console.log('robot moving')
  }
}

export default BioRobot
