import IMemento from './IMemento'
class Memento extends IMemento {
  constructor (result) {
    super()
    this.result = result || 0
  }
  getResult () {
    return this.result
  }
}

export default Memento
