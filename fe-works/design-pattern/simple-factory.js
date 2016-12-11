class ComputerFactory {
  constructor(type, ...args) {
    switch(type) {
      case 'low':
        this.printer = 'LRPD'
        this.driver = 'LRDD'
        break
      case 'high':
        this.printer = 'HRPD'
        this.driver = 'HRDD'
        break
    }
  }

  display() {
    console.log("draw with", this.driver)
  }

  print() {
    console.log("print with", this.printer)
  }


}

const test1 = new ComputerFactory("low", 1, 2, 3, 4)
test1.display()
test1.print()
