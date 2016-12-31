class Credit {
  constructor () {
    this.database = {
      'Emmy': 8,
      'Jack': 2
    }
  }
  hasGoodCredit (custumer) {
    const name = custumer.getName()
    console.log(`checking ${name}'s credit`)
    return this.database[name] > 5
  }
}

export default Credit
