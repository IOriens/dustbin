import AbstractCommand from './AbstractCommand'

class AddCommand extends AbstractCommand {
  constructor (opNum) {
    super()
    this.opNum = opNum
  }
  execute () {
    this.operation.add(this.opNum)
  }
}

export default AddCommand
