function work(a, b) {
  console.log(a + b)
}
function makeLogging(f) {
  var args = []

  function logging() {
    args.push(Array.prototype.slice.apply(arguments).join(','))
    f.apply(this, arguments)
  }
  logging.outputLog = function() {
    for(var i of args) {
      console.log(i)
    }
  }
  return logging
}

let nwork = makeLogging(work)
nwork(2,3)
nwork(2,5)
nwork.outputLog()
