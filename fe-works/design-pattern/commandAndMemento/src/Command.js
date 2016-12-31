class Command {
 // 执行命令
  execute () {

  }
 // 撤销命令，恢复到备忘录记录的状态
  undo (memo) {

  }
 // 重做命令，恢复到备忘录对象记录的状态
  redo (memo) {

  }
 // 创建保存原发器对象状态的备忘录对象
  createMemento () {

  }
}

export default Command
