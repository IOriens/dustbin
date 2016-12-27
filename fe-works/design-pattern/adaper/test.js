/* eslint-env mocha */
import {
  expect
} from 'chai'
import BioRobot from './src/BioRobot'
import sinon from 'sinon'

let sin = null

beforeEach(() => {
  sin = sinon.sandbox.create()
})

afterEach(function () {
  sin.restore()
})

describe('BioRobot Tests', () => {
  beforeEach(() => {
    sin.stub(console, 'log')
  })

  describe('BioRobot normal behaviour', () => {
    const robot = new BioRobot()
    it('should cry', () => {
      robot.cry()
      expect(console.log.calledWith('robot crying')).to.be.true
    })

    it('should cry', () => {
      robot.move()
      expect(console.log.calledWith('robot moving')).to.be.true
    })
  })

  describe('BioRobot act like a dog', () => {
    const robot = new BioRobot('Dog')
    it('should bark', () => {
      robot.cry()
      expect(console.log.calledWith('这是狗叫：汪汪汪')).to.be.true
    })

    it('should run', () => {
      robot.move()
      expect(console.log.calledWith('这是狗跑')).to.be.true
    })
  })

  describe('BioRobot act like a bird', () => {
    const robot = new BioRobot('Bird')
    it('should bark', () => {
      robot.cry()
      expect(console.log.calledWith('这是鸟叫：叽叽叽')).to.be.true
    })

    it('should run', () => {
      robot.move()
      expect(console.log.calledWith('这是鸟飞')).to.be.true
    })
  })
})
