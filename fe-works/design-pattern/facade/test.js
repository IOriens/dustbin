/* eslint-env mocha */
import {
  expect,
  assert
} from 'chai'
import Mortgage from './src/Mortgage'
import Customer from './src/Customer'
import sinon from 'sinon'

let sin = null

beforeEach(() => {
  sin = sinon.sandbox.create()
})

afterEach(function () {
  sin.restore()
})

describe('Mortgage', () => {
  beforeEach(() => {
    sin.stub(console, 'log')
  })

  describe('Can distinguish bad customer', () => {
    const name = 'Jack'
    const customer = new Customer(name)
    const mortgage = new Mortgage()

    it(`should return fasle cause ${name}'s credit is bad`, () => {
      assert.equal(false, mortgage.check(customer))
      expect(console.log.calledWith(`checking ${name}'s credit`)).to.be.true
      expect(console.log.calledWith(`checking ${name}'s loan`)).to.be.true
      expect(console.log.calledWith(`checking ${name}'s bank`)).to.be.true
    })
  })

  describe('Can distinguish good customer', () => {
    const name = 'Emmy'
    const customer = new Customer(name)
    const mortgage = new Mortgage()

    it(`should return true cause ${name}'s credit is good`, () => {
      assert.equal(true, mortgage.check(customer))
      expect(console.log.calledWith(`checking ${name}'s credit`)).to.be.true
      expect(console.log.calledWith(`checking ${name}'s loan`)).to.be.true
      expect(console.log.calledWith(`checking ${name}'s bank`)).to.be.true
    })
  })
})
