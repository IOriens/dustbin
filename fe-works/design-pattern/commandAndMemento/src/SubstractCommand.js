import AbstractCommand from './AbstractCommand'

class SubstractCommand extends AbstractCommand {
  constructor (opNum) {
    super()
    this.opNum = opNum
  }

  execute () {
    this.operation.sub(this.opNum)
  }
}

export default SubstractCommand
