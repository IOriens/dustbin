class Calculator {
  constructor () {
    this.undoCmds = []
    this.redoCmds = []
    this.undoMemo = []
    this.redoMemo = []
    this.addCmd = null
    this.subCmd = null
  }

  setAddCmd (addCmd) {
    this.addCmd = addCmd
  }

  setSubStractCmd (subCmd) {
    this.subCmd = subCmd
  }

  addPressed () {
    const oldMemo = this.addCmd.createMemento()
    this.addCmd.execute()
    this.undoCmds.push(this.addCmd)
    const newMemo = this.addCmd.createMemento()
    this.undoMemo.push([oldMemo, newMemo])
  }

  subPressed () {
    const oldMemo = this.subCmd.createMemento()
    this.subCmd.execute()
    this.undoCmds.push(this.subCmd)
    const newMemo = this.subCmd.createMemento()
    this.undoMemo.push([oldMemo, newMemo])
  }

  undoPressed () {
    if (this.undoCmds.length > 0) {
      const cmd = this.undoCmds.pop()
      const memo = this.undoMemo.pop()
      cmd.undo(memo[0])
      this.redoCmds.push(cmd)
      this.redoMemo.push(memo)
    }
  }

  redoPressed () {
    if (this.redoCmds.length > 0) {
      const cmd = this.redoCmds.pop()
      const memo = this.redoMemo.pop()
      cmd.redo(memo[1])
      this.undoCmds.push(cmd)
      this.undoMemo.push(memo)
    }
  }
}

export default Calculator
