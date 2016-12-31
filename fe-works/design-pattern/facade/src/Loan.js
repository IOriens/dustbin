class Loan {
  hasNoBadLoans (customer) {
    console.log(`checking ${customer.getName()}'s loan`)
    return true
  }
}

export default Loan
