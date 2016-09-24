function above18(dt) {
    dt = dt.split('-')
    dt[0] = parseInt(dt[0]) + 18
    dt = new Date(dt.join('-'))
    dt2 = new Date()
    return dt < dt2
}
console.log(above18('2001-6-3'))