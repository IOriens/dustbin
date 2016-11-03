// Abstracts
class AbstractDriverFactory {
    constructor() {
        console.log('AbstractDriverFactory created')
    }
}

class AbstractDisplayDriver {
    constructor() {
        console.log('AbstarctDisplayDriver created')
    }

    show() {
        console.log('AbstarctDisplayDriver show')
    }
}

class AbstractPrinterDriver {
    constructor() {
        console.log('AbstarctPrinterDriver created')
    }

    show() {
        console.log('AbstarctPrinterDriver show')
    }
}



// Display Implementations 
class LowPerfPCDisplayDriver extends AbstractDisplayDriver {
    constructor() {
        super()
        this.driverName = 'LRDD低分辨率显示驱动程序'
    }

    show() {
        console.log(`Draw with ${this.driverName}`)
    }
}

class HighPerfPCDisplayDriver extends AbstractDisplayDriver {
    constructor() {
        super()
        this.driverName = 'HRDD高分辨率显示驱动程序'
    }

    show() {
        console.log(`Drawing with ${this.driverName}`)
    }
}

// Printer Implementations
class LowPerfPCPrinterDriver extends AbstractPrinterDriver {
    constructor() {
        super()
        this.driverName = 'LRPD低分辨率打印驱动程序'
    }

    print() {
        console.log(`Printing with ${this.driverName}`)
    }
}

class HighPerfPCPrinterDriver extends AbstractPrinterDriver {
    constructor() {
        super()
        this.driverName = 'HRPD高分辨率打印驱动程序'
    }

    print() {
        console.log(`Printing with ${this.driverName}`)
    }
}

// Final Factories
class ConcreteHighPerfPCDriverFactory extends AbstractDriverFactory {
    constructor() {
        super()
        console.log('ConcreteHighPerfDriverFactory created')
    }

    createDisplayDriver() {

        return new HighPerfPCDisplayDriver()
    }

    createPrinterDriver() {

        return new HighPerfPCPrinterDriver()
    }
}

class ConcreteLowPerfPCDriverFactory extends AbstractDriverFactory {
    constructor() {
        super()
        console.log('ConcreteLowPerfPCDriverFactory created')
    }
    createDisplayDriver() {
        return new LowPerfPCDisplayDriver()
    }

    createPrinterDriver() {

        return new LowPerfPCPrinterDriver()
    }
}


// Tests
(() => {
    
    // HighPerfPC
    const highPerfPC = new ConcreteHighPerfPCDriverFactory()
    highPerfPC.createDisplayDriver().show()
    highPerfPC.createPrinterDriver().print()

    console.log('-----------')
    
    // LowPerfPC
    const lowPerfPC = new ConcreteLowPerfPCDriverFactory()
    lowPerfPC.createDisplayDriver().show()
    lowPerfPC.createPrinterDriver().print()

})();