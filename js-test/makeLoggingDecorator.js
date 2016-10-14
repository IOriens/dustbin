function work(a, b) {
  console.log(a + b)
}
function makeLogging(f) {
  var args = []
  return function () {
    args.push(Array.prototype.slice.apply(arguments).join(','))
    f.apply(this, arguments)
    for(let i of args) {
      console.log(i)
    }
  }
}

let nwork = makeLogging(work)
nwork(2,3)
nwork(2,5)
