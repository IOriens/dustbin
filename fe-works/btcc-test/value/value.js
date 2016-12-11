const value = (func)=> {
    if(typeof func === "function") {
        func = func.apply(null)
        return value(func)
    } else {
        console.log(func)
        return func
    }
}

module.exports = value