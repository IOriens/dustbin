import Memento from './Memento'
import IOperation from './IOperation'

class Operation extends IOperation {
  constructor () {
    super()
    this.result = 0
  }

  getResult () {
    return this.result
  }
  add (num) {
    this.result += num
  }
  sub (num) {
    this.result -= num
  }
  createMemento () {
    return new Memento(this.result)
  }
  setMemento (memo) {
    this.result = memo.getResult()
  }
}

export default Operation
