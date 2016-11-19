const curry = (func) => {
    this.args = []

    var curryHelper = (...args) => {
        if(this.args.length === 0) {
            this.args = args
            return curryHelper
        } else {            
            return func.apply(null, this.args.concat(args) )
        }
    }

    return curryHelper
}


module.exports = curry