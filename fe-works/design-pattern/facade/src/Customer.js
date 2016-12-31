class Customer {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
  setName (name) {
    this.name = name
    return this.name
  }
}

export default Customer
