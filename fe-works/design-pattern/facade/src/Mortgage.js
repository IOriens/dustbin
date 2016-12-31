import Bank from './Bank'
import Loan from './Loan'
import Credit from './Credit'

class Mortgage {
  constructor () {
    this.bank = new Bank()
    this.loan = new Loan()
    this.credit = new Credit()
  }
  check (customer) {
    let mark = 0
    if (this.bank.hasSufficientSavings(customer)) {
      mark++
    }
    if (this.credit.hasGoodCredit(customer)) {
      mark++
    }
    if (this.loan.hasNoBadLoans(customer)) {
      mark++
    }
    return mark === 3
  }

}

export default Mortgage
