/* eslint-env mocha */
import {
  assert
} from 'chai'
import Operation from './src/Operation'
import Calculator from './src/Calculator'
import AddCommand from './src/AddCommand'
import SubstarctCommand from './src/SubstractCommand'

import sinon from 'sinon'

let sin = null

beforeEach(() => {
  sin = sinon.sandbox.create()
})

afterEach(function () {
  sin.restore()
})

describe('Calculator', () => {
  beforeEach(() => {
  //  sin.stub(console, 'log')
  })
  // 创建接收者
  const operation = new Operation()
  // 创建命令
  const add5Cmd = new AddCommand(5)
  const add3Cmd = new AddCommand(3)
  const sub3Cmd = new SubstarctCommand(3)

  // 组装命令和接收者
  add5Cmd.setOperation(operation)
  add3Cmd.setOperation(operation)
  sub3Cmd.setOperation(operation)

  // 把命令设置到持有者，就是计算器中
  const calculator = new Calculator()

  describe('Can calculate, init result is 0', () => {
    it(`should +5 return 5`, () => {
      calculator.setAddCmd(add5Cmd)
      calculator.addPressed()
      assert.equal(5, operation.getResult())
    })

    it(`should +3 return 8`, () => {
      calculator.setAddCmd(add3Cmd)
      calculator.addPressed()
      assert.equal(8, operation.getResult())
    })

    it(`should -3 return 5`, () => {
      calculator.setSubStractCmd(sub3Cmd)
      calculator.subPressed()
      assert.equal(5, operation.getResult())
    })
  })

  describe('Can Redo and Undo', () => {
    it(`should undo and return 8`, () => {
      calculator.undoPressed()
      assert.equal(8, operation.getResult())
    })

    it(`should redo and return 5`, () => {
      calculator.redoPressed()
      assert.equal(5, operation.getResult())
    })
  })
})
